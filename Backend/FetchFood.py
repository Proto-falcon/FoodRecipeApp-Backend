import json
from Backend import appKey
from requests import request as fetch, Response


def fetchfood(ingredients: list[str]):

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
    hits: dict = json.loads(response.content)["hits"][0]
    return {
        "name": hits["recipe"]["label"],
        "image": hits["recipe"]["images"]["SMALL"]["url"],
        "ingredients": hits["recipe"]["ingredientLines"],
        "source": hits["recipe"]["url"],
    }
