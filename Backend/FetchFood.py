import json
from Backend import appKey
from requests import request as fetch, Response


def fetchfood(
    ingredients: str = None,
    options: dict[str, list[str] | str] = None
):
    """
    Fetches food recipes using edaman web api then returns them
    as a dictionary with an array of recipe reults and link to load more recipes
    """

    query: str = ""
    
    if ingredients is None and len(options) <= 0:
        return {"message": "No Arguments given"}
    
    if ingredients is not None:
        query += f"&q={ingredients}"
    
    if len(options) > 0:
        for optionName, value in options.items():
            if type(value).__name__ == "list":
                for option in value:
                    query += f"&{optionName}={option}"
            else:
                query += f"&{optionName}={value}"

    domain: str = "https://api.edamam.com/api/recipes/v2"  # Web API Endpoint

    # Sends the request to the food API
    fullURL = f"{domain}?type=any{query}&{appKey.credentials}"
    response: Response = fetch("GET", fullURL)
    results = serializeRecipeResults(response)

    return results


def serializeRecipeResults(response: Response):
    """
    Converts the recipe result from edaman web api to a dictionary
    that contains a link to more recipes and an array of recipe objects.
    """
    content: dict[str] = json.loads(response.content)
    hits: list[dict[str]] = content["hits"]
    try:
        addRecipesLink: str = content["_links"]["next"]["href"]
    except (KeyError):
        addRecipesLink = None

    recipes: list[dict] = []
    for hit in hits:
        recipes.append(
            {
                "name": hit["recipe"]["label"],
                "image": hit["recipe"]["images"]["SMALL"]["url"],
                "ingredients": hit["recipe"]["ingredientLines"],
                "source": hit["recipe"]["url"],
            }
        )

    return {"results": recipes, "addRecipesLink": addRecipesLink}
