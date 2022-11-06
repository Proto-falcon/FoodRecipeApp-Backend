import json
from django.http import HttpRequest, JsonResponse
from Backend import FetchFood

# Create your views here.
def index(request: HttpRequest):
    query_string = request.META['QUERY_STRING'][12:]
    ingredients = []
    
    if query_string[0] == "_":
        ingredients = query_string[1:].split("_")
    else:
        ingredients = request.META['QUERY_STRING'][12:].split("%20")

    if len(ingredients) > 0:
        context = FetchFood.fetchfood(ingredients)
        return JsonResponse(context)
    else:
        response = JsonResponse({})
        response.status_code = 400
        return response
