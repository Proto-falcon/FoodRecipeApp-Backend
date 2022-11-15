from django.http import HttpRequest, JsonResponse
from Backend import FetchFood
from cryptography.fernet import Fernet

key = Fernet.generate_key()
fernet = Fernet(key)

# Create your views here.
def index(request: HttpRequest):
    ingredients = []
    ingredients = request.META['QUERY_STRING'][12:].split("%20")

    if len(ingredients) > 0:
        context = FetchFood.fetchfood(ingredients)
        context["addRecipesLink"] = fernet.encrypt(context["addRecipesLink"].encode())
        return JsonResponse(context)
    else:
        response = JsonResponse({})
        response.status_code = 400
        return response

def additionalRecipes(request: HttpRequest):
    return JsonResponse({})
