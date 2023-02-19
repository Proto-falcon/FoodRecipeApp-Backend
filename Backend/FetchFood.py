import json
from Backend import appKey
from requests import request as fetch, Response

endpoint: str = "https://api.edamam.com/api/recipes/v2"  # Web API Endpoint

def fetchfood(
    ingredients: str = "",
    options: dict[str, list[str] | str] = {},
    exclusions: list[str] = {}
):
    """
    Fetches food recipes using edaman web api then returns them
    as a dictionary with an array of recipe reults and link to load more recipes
    """
    query: str = ""
    
    if ingredients == "" and len(options) <= 0 and len(exclusions) <= 0:
        return {"message": "No Arguments given"}
    
    if ingredients != "":
        query += f"q={ingredients}"
    
    if len(options) > 0:
        for optionName, value in options.items():
            if len(query) > 0 and len(value) > 0:
                query += "&"
            if type(value).__name__ == "list":
                i = 0
                for option in value:
                    option = option.split("/")[0]
                    query += f"{optionName}={option}"
                    if i < len(value) - 1:
                        query += "&"
                    i += 1
            else:
                query += f"{optionName}={value}"

    if len(exclusions) > 0:
        if len(query) > 0:
            query += "&"
        
        for i in range(0, len(exclusions)):
            query += f"excluded={exclusions[i]}"

            if i < len(exclusions) - 1:
                query += "&"

    # Sends the request to the food API
    fullURL = f"{endpoint}?type=public&{query}&{appKey.credentials}"
    response: Response = fetch("GET", fullURL)
    results = serializeRecipeResults(response)
    return results


def fetchRecipe(id: str):
    """
    Fetches a single recipe via id
    """
    fullURL = f"{endpoint}/{id}?type=public&{appKey.credentials}"
    response: Response = fetch("GET", fullURL)
    content = json.loads(response.content)
    return transformRecipe(content)

def transformRecipe(recipeRaw: dict[str]):
    """
    Convers the results of the recipe results to only give important information
    """
    ingredients: list[str] = recipeRaw["recipe"]["ingredientLines"]
    # noExclusions = True
    # for ingredient in ingredients:
    #     if ingredient.lower() in exclusions:
    #         noExclusions = False
    #         break
    id: str = recipeRaw["recipe"]["uri"]
    id = id.split("#recipe_")[-1]
    # if noExclusions:
    return {
            "id": id,
            "name": recipeRaw["recipe"]["label"],
            "image": recipeRaw["recipe"]["images"]["SMALL"]["url"],
            "ingredients": ingredients,
            "source": recipeRaw["recipe"]["url"],
        }

def serializeRecipeResults(response: Response):
    """
    Converts the recipe result from edaman web api to a dictionary
    that contains a link to more recipes and an array of recipe objects.
    """
    content: dict[str] = json.loads(response.content)
    hits: list[dict[str]] = content["hits"]

    if len(hits) <= 0:
        return {"results": [], "addRecipesLink": None}
    
    try:
        addRecipesLink: str = content["_links"]["next"]["href"]
    except (KeyError):
        addRecipesLink = None

    # Converts all exclusions to lower case to remove any capital letters
    # for excluded in exclusions:
    #     excluded = excluded.lower()

    recipes: list[dict[str]] = []
    for hit in hits:
        recipe = transformRecipe(hit)
        if recipe is not None:
            recipes.append(recipe)
    return {"results": recipes, "addRecipesLink": addRecipesLink}
