from django.http import HttpRequest, JsonResponse
from Backend import FetchFood
from cryptography.fernet import Fernet
from requests import request as fetch, Response


key = Fernet.generate_key()
fernet = Fernet(key)

# Create your views here.
def index(request: HttpRequest):
    """
    Gives a list of recipes with recipe link via search options
    """
    ingredients = []
    ingredients = request.META['QUERY_STRING'][12:].split("%20")
    
    if len(ingredients) > 0:
        results = FetchFood.fetchfood(ingredients)
        results["addRecipesLink"] = fernet.encrypt(results["addRecipesLink"].encode()).decode()
        return JsonResponse(results)
    else:
        response = JsonResponse({"message": "No ingredients given!"})
        response.status_code = 400
        return response


def addRecipes(request: HttpRequest):
    """
    Gives a list of recipes via a recipe link
    """
    if len(request.META['QUERY_STRING'][9:]) > 0:
        url = fernet.decrypt(request.META['QUERY_STRING'][9:].encode())
        response: Response = fetch("GET", url)
        results = FetchFood.serializeRecipeResults(response)
        results["addRecipesLink"] = fernet.encrypt(results["addRecipesLink"].encode()).decode()
        return JsonResponse(results)
    response = JsonResponse({"Valid URL": False})
    response.status_code = 400
    return response

