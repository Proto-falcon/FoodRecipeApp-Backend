from io import BytesIO
from random import choice
from requests import request as fetch
from django.db.transaction import atomic
from django.shortcuts import get_object_or_404
from django.http import Http404, JsonResponse
from django.core.files.images import ImageFile
from Backend.FetchFood import fetchfood
from Backend.models import Recipe, Ingredient, Nutrient

REQUEST_LIMIT = 7
MAX_RAND_WORDS = 3

def removeNonAlpha(notAlpha: str):
    """
    Returns a string without any non-alphabetic characters in string.
    """
    onlyAlpha = ""
    for i in range(len(notAlpha)):
        if notAlpha[i].isalpha():
            onlyAlpha += notAlpha[i]

    return onlyAlpha


def FindRecipeNotInDB(recipes: list[dict[str, str | list | dict[str, str | int]]], recipeName: str, imageUrl: str):
    """
    Finds a recipe not already in the database from the list of dictionaries that represent recipes.
    Returns None
    """
    for recipe in recipes:
        try:
            Recipe.objects.get(uri=recipe["uri"].split("#recipe_")[-1])
        except (Recipe.DoesNotExist):
            recipe.update({"name": recipeName, "image": imageUrl})
            return recipe

def fetchSimiliarRecipe(recipe: Recipe):
    """
    Gives a recipe dictionary with all relevant information from edamam api
    about a `similiar` recipe.\n
    Gives an error message from the edamam web API.
    """
    recipeResults: list[dict[str]] = []
    recipeName = recipe.name

    """
    First request will be with the exact recipe name.
    If it has atleast `1` result then use the first result that isn't part of the database.
    If doesn't have atleast `1` result or can't find any recipes that aren't already part of the database then:
    Do a generic random search by only using 1 or 2 of the words in the given recipe name (`recipe.name`)
    Doing random since it's generic there will be lots of recipes and want to get recipes that aren't already part of the database
    so random result will dramatically reduce the need to do multiple queries.
    """

    response = fetchfood(recipe.name, fullInfo=True)
    
    if "message" not in response:
        # print(response.keys())
        results: list[dict[str, str | list | dict[str, str | int]]] = []

        if len(response["results"]) > 0:
            results = response["results"]
            newRecipe = FindRecipeNotInDB(results, recipe.name, recipe.imageUrl)
            if newRecipe is not None:
                print(3)
                return newRecipe
        
        limit = REQUEST_LIMIT
        while limit > 0:
            if len(response["results"]) <= 0:
                recipeNameList = recipe.name.split(" ")
                randName = ""
                for i in range(len(recipeNameList)):
                    if i < MAX_RAND_WORDS:
                        word = choice(recipeNameList)
                        randName += f"{word} "
                        while word in recipeNameList:
                            recipeNameList.remove(word)
                    else:
                        break
            
            response = fetchfood(randName, fullInfo=True)
            if "message" in response:
                print(2)
                return response
            
            newRecipe = FindRecipeNotInDB(results, recipe.name, recipe.imageUrl)
            if newRecipe is not None:
                print(1)
                return newRecipe
            
            limit -= 1
    print(0)
    # This response has results of recipes which isn't an empty list
    return response


def incorrectRequest(message: str, status_code: int=200, **kwargs):
    """
    Returns a json response for incorrect request
    """
    content = {"message": message}
    content.update(kwargs)
    response = JsonResponse({"message": message})
    response.status_code = status_code
    return response


def fetch_object_or_404(model, **credentials):
    """
    Wrapper arround the django get_object_or_404 only used for authenticated user's
    where instead of raising an error when no object doensn't exist
    it just returns `False`.
    """
    try:
        row = get_object_or_404(model, username=credentials["username"])
        return row
    except (Http404):
        return False


@atomic
def addIngredients(recipe: Recipe, ingredients: list[dict]):
    """
    Creates Ingredient objects for the recipe object
    """
    Ingredient.objects.bulk_create(
        [
            Ingredient(
                recipe=recipe,
                name=fullIngr["food"] if fullIngr["food"] is not None else "",
                quantity=fullIngr["quantity"]
                if fullIngr["quantity"] is not None
                else 0,
                measure=fullIngr["measure"] if fullIngr["measure"] is not None else "",
                category=fullIngr["foodCategory"]
                if fullIngr["foodCategory"] is not None
                else "",
            )
            for fullIngr in ingredients
        ]
    )


@atomic
def addNutrients(recipe: Recipe, nutrients: list[dict]):
    """
    Creates Nutrient objects for the recipe object
    """
    Nutrient.objects.bulk_create(
        [
            Nutrient(
                recipe=recipe,
                label=nutrient["label"],
                quantity=nutrient["quantity"],
                unit=nutrient["unit"] if nutrient["unit"] is not None else "",
            )
            for nutrient in nutrients
        ]
    )

@atomic
def makeFullRecipe(id: str, incompleteRecipe: Recipe, fullRecipe: dict[str]):
    """
    Makes the incomplete recipe a full `Recipe` object.
    """

    cautions: list[str] = []
    if len(fullRecipe["cautions"]) > 0:
        cautions = fullRecipe["cautions"]

    incompleteRecipe.uri=id
    incompleteRecipe.name=fullRecipe["name"]
    incompleteRecipe.source=fullRecipe["source"]
    incompleteRecipe.cautions={"list": cautions}
    incompleteRecipe.diets={"list": fullRecipe["diets"]}
    incompleteRecipe.healths={"list": fullRecipe["healths"]}
    incompleteRecipe.cuisineTypes={"list": fullRecipe["cuisineTypes"]}
    incompleteRecipe.mealTypes={"list": fullRecipe["mealTypes"]}
    incompleteRecipe.dishTypes={"list": fullRecipe["dishTypes"]}
    incompleteRecipe.ingredientTexts={"list": fullRecipe["ingredients"]}

    # Gets the recipe image
    if len(fullRecipe["image"]) > 0:
        response = fetch("GET", fullRecipe["image"])
        # Get images via python requests module instead Django's UploadedFile object in requests passed to the view functions
        with ImageFile(BytesIO(response.content), f"{fullRecipe['name']}.jpg") as imageFile:
            incompleteRecipe.image.save(imageFile.name, imageFile)

    incompleteRecipe.save()
    
    addIngredients(incompleteRecipe, fullRecipe["fullIngredients"])
    addNutrients(incompleteRecipe, fullRecipe["nutrients"])

    return incompleteRecipe

@atomic
def createOrGetFullRecipe(id: str, fullRecipe: dict[str]):
    """
    Stores all the relevant recipe information across models.\n
    Also returns the recipe if it already exists and doesn't reinitialize
    other information.
    """
    # Gets the recipe image
    response = fetch("GET", fullRecipe["image"])

    # Get images via python requests module instead Django's UploadedFile object in requests passed to the view functions
    with ImageFile(BytesIO(response.content), f"{fullRecipe['name']}.jpg") as imageFile:
        cautions: list[str] = []
        if len(fullRecipe["cautions"]) > 0:
            cautions = fullRecipe["cautions"]
        
        recipe, isCreated = Recipe.objects.get_or_create(
            uri=id,
            name=fullRecipe["name"],
            source=fullRecipe["source"],
        )

        # return imediately if recipe already exists in the database
        if not isCreated:
            return recipe
        
        recipe.cautions={"list": cautions}
        recipe.diets={"list": fullRecipe["diets"]}
        recipe.healths={"list": fullRecipe["healths"]}
        recipe.cuisineTypes={"list": fullRecipe["cuisineTypes"]}
        recipe.mealTypes={"list": fullRecipe["mealTypes"]}
        recipe.dishTypes={"list": fullRecipe["dishTypes"]}
        recipe.ingredientTexts={"list": fullRecipe["ingredients"]}
        recipe.image.save(imageFile.name, imageFile)

    recipe.save()

    addIngredients(recipe, fullRecipe["fullIngredients"])
    addNutrients(recipe, fullRecipe["nutrients"])

    return recipe
