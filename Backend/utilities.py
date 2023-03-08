from django.db.transaction import atomic
from django.shortcuts import get_object_or_404
from django.http import Http404
from django.core.files.images import ImageFile
from requests import request as fetch
from io import BytesIO

from Backend.models import *

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
def createFullRecipe(id: str, fullRecipe: dict[str]):
    """
    Stores all the relevant recipe information across tables
    """
    # Creates the recipe object
    response = fetch("GET", fullRecipe["image"])

    # Get images via python requests module instead Django's UploadedFile object in requests passed to the view functions
    with BytesIO(response.content) as bytesImage, ImageFile(bytesImage, f"{fullRecipe['name']}.jpg") as imageFile:
        recipe = Recipe(
            uri=id,
            name=fullRecipe["name"],
            image= imageFile,
            source=fullRecipe["source"]
        )
        # recipe.image.save(f"{recipe.name}.jpg", imageFile, True)
        recipe.save()

    # Creates Diet objects for recipe object
    for diet in fullRecipe["diets"]:
        Diet(recipe=recipe, label=diet).save()

    # Creates Health objects for recipe object
    for health in fullRecipe["healths"]:
        Health(recipe=recipe, label=health).save()

    # Creates CuisineType object for recipe object
    for cuisine in fullRecipe["cuisineTypes"]:
        CuisineType(recipe=recipe, label=cuisine).save()
            
    # Creates MealType objects for recipe object
    for mealType in fullRecipe["mealTypes"]:
        MealType(recipe=recipe, label=mealType).save()

    # Creates DishType objects for recipe object
    for dishType in fullRecipe["dishTypes"]:
        DishType(recipe=recipe, label=dishType).save()

    # Creates Ingredient objects for the recipe object
    for ingredient in fullRecipe["ingredients"]:
        ingrText = IngredientText(text=ingredient, recipe=recipe)
        ingrText.save()
        for fullIngr in fullRecipe["fullIngredients"]:
            if ingredient == fullIngr["text"]:
                Ingredient(
                    text=ingrText,
                    name=fullIngr["food"] if fullIngr["food"] is not None else "",
                    quantity=fullIngr["quantity"] if fullIngr["quantity"] is not None else 0,
                    measure=fullIngr["measure"] if fullIngr["measure"] is not None else "",
                    category=fullIngr["foodCategory"] if fullIngr["foodCategory"] is not None else ""
                ).save()

    # Creates Caution objects for the recipe object
    cautions: list[str] = fullRecipe["cautions"]
    if len(cautions) > 0:
        for caution in cautions:
            Caution(name=caution, recipe=recipe).save()

    # Creates Nutrient objects for the recipe object
    for nutrient in fullRecipe["nutrients"]:
        Nutrient(
            recipe=recipe,
            label=nutrient["label"],
            quantity=nutrient["quantity"],
            unit=nutrient["unit"]if nutrient["unit"] is not None else ""
        ).save()
    
    return recipe