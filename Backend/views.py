from django.http import HttpRequest, JsonResponse
from Backend import FetchFood, utilities
from cryptography.fernet import Fernet
from requests import request as fetch, Response

key = Fernet.generate_key()
fernet = Fernet(key)

# Create your views here.
def index(request: HttpRequest):
    """
    Gives a list of recipes with recipe link via search options.
    """
    if not request.GET.__contains__(
        "ingredients" 
    ) and not utilities.KeysViewNotContains("ingredients", request.GET.keys()):
        response = JsonResponse({"message": "No ingredients given!"})
        response.status_code = 400
        return response

    ingredients = ""
    options: dict[str] = {}
    if request.GET.__contains__("ingredients"):
        ingredients = request.GET["ingredients"]
    if utilities.KeysViewNotContains("ingredients", request.GET.keys()):
        for option in request.GET.keys():
            if option != "ingredients":
                options[option] = request.GET.getlist(option)
    
    if len(ingredients) > 0 or len(options):
        results = FetchFood.fetchfood(ingredients, options)
        try:
            if results["addRecipesLink"] is not None:
                results["addRecipesLink"] = fernet.encrypt(
                    results["addRecipesLink"].encode()
                ).decode()
            else:
                results.pop("addRecipesLink")
        except (KeyError):
            return JsonResponse(results)
        return JsonResponse(results)
    else:
        response = JsonResponse({"message": "No ingredients given!"})
        response.status_code = 400
        return response


def addRecipes(request: HttpRequest):
    """
    Gives a list of recipes via a recipe link
    """
    if request.GET.__contains__("nextLink") and request.GET["nextLink"] != "undefined":
        url = fernet.decrypt(request.GET["nextLink"].encode())
        response: Response = fetch("GET", url)
        results = FetchFood.serializeRecipeResults(response)
        try:
            if results["addRecipesLink"] is not None:
                results["addRecipesLink"] = fernet.encrypt(
                    results["addRecipesLink"].encode()
                ).decode()
            else:
                results.pop("addRecipesLink")
        except (KeyError):
            return JsonResponse(results)
        return JsonResponse(results)
    response = JsonResponse({"message": "invalid URL"})
    response.status_code = 400
    return response
