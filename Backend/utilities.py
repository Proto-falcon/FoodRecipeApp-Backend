from django.db.transaction import atomic
from django.shortcuts import get_object_or_404
from django.http import Http404
from django.core.files.images import ImageFile
from requests import request as fetch
from io import BytesIO

from Backend.models import Recipe, Ingredient, Nutrient


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
def makeFullRecipe(id: str, incompleteRecipe: Recipe, fullRecipe: dict[str]):
    """
    Makes the incomplete recipe a full recipe.
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
        with ImageFile(BytesIO(BytesIO(response.content)), f"{fullRecipe['name']}.jpg") as imageFile:
            incompleteRecipe.image.save(imageFile.name, imageFile)

    incompleteRecipe.save()
    
    # Creates Ingredient objects for the recipe object
    Ingredient.objects.bulk_create(
        [
            Ingredient(
                recipe=incompleteRecipe,
                name=fullIngr["food"] if fullIngr["food"] is not None else "",
                quantity=fullIngr["quantity"]
                if fullIngr["quantity"] is not None
                else 0,
                measure=fullIngr["measure"] if fullIngr["measure"] is not None else "",
                category=fullIngr["foodCategory"]
                if fullIngr["foodCategory"] is not None
                else "",
            )
            for fullIngr in fullRecipe["fullIngredients"]
        ]
    )

    # Creates Nutrient objects for the recipe object
    Nutrient.objects.bulk_create(
        [
            Nutrient(
                recipe=incompleteRecipe,
                label=nutrient["label"],
                quantity=nutrient["quantity"],
                unit=nutrient["unit"] if nutrient["unit"] is not None else "",
            )
            for nutrient in fullRecipe["nutrients"]
        ]
    )

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

    # Creates Ingredient objects for the recipe object
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
            for fullIngr in fullRecipe["fullIngredients"]
        ]
    )

    # Creates Nutrient objects for the recipe object
    Nutrient.objects.bulk_create(
        [
            Nutrient(
                recipe=recipe,
                label=nutrient["label"],
                quantity=nutrient["quantity"],
                unit=nutrient["unit"] if nutrient["unit"] is not None else "",
            )
            for nutrient in fullRecipe["nutrients"]
        ]
    )

    return recipe
