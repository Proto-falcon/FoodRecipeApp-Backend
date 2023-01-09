import json
from Backend import appKey
from requests import request as fetch, Response


def fetchfood(ingredients: list[str]):
    """
    Fetches food recipes using edaman web api then returns them
    as a dictionary with an array of recipe reults and link to load more recipes
    """
    url: str = "https://api.edamam.com/api/recipes/v2"  # API REST Endpoint

    without: list[str] = []
    excluded: str = ""
    done = "y"

    wantToExclude = "n"
    if wantToExclude == "y":
        while (
            done == "y"
        ):  # Enter a list of ingredients that want to be not included in the results
            without.append(input("Enter an ingredient that you don't want:\n"))

            done = input("Want to add more ingredients that you don't want (y/n):\n")

        for exclude in without:  # Add excluded ingredients in a query string format
            excluded += f"&excluded={exclude}"

    # Sends the request to the food API
    fullURL = f"{url}?type=public&q={ingredients}{excluded}&{appKey.credentials}"
    response: Response = fetch("GET", fullURL)
    results = serializeRecipeResults(response)

    return results

def serializeRecipeResults(response: Response):
    """
    Converts the recipe result from edaman web api to a dictionary
    that contains a link to more recipes and an array of recipe objects.
    """
    hits: list[dict] = json.loads(response.content)["hits"]
    addRecipesLink: str = json.loads(response.content)["_links"]["next"]["href"]

    recipes :list[dict] = []
    for hit in hits:
        recipes.append(
            {
                "name": hit["recipe"]["label"],
                "image": hit["recipe"]["images"]["SMALL"]["url"],
                "ingredients": hit["recipe"]["ingredientLines"],
                "source": hit["recipe"]["url"],
            })

    return { "results":recipes, "addRecipesLink": addRecipesLink }
