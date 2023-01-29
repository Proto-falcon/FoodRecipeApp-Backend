from django.http import HttpRequest, JsonResponse
from Backend import FetchFood
from Backend.utilities import KeysViewNotContains
from cryptography.fernet import Fernet
from requests import request as fetch
import json
from Backend.models import *
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.shortcuts import get_object_or_404
from django.middleware.csrf import get_token

key = Fernet.generate_key()
fernet = Fernet(key)

BAD_REQUEST = 400
INTERNAL_SERVER_ERROR = 500

# Create your views here.
@ensure_csrf_cookie
def getCsrfToken(request: HttpRequest) -> JsonResponse:
    if request.method == "GET":
        return JsonResponse({"token": get_token(request)})
    else:
        response = JsonResponse({"message": "Invalid http method"})
        response.status_code = BAD_REQUEST
        return response

# @csrf_exempt
def signUp(request: HttpRequest) -> JsonResponse:
    """
    Creates a new account for the user via creating a new user.
    """
    print(request.headers)
    content: dict[str] = json.loads(request.body)
    keys = content.keys()
    if (
        request.method == "POST"
        and not KeysViewNotContains("username", keys)
        and not KeysViewNotContains("email", keys)
        and not KeysViewNotContains("password", keys)
    ):
        username = content["username"]
        email = content["email"]
        password = content["password"]
        if User.objects.filter(username=username).exists():
            return JsonResponse({"signUpSuccess": False, "message": "Account already Exists"})
        else:
            newUser = User.objects.create(username=username, email=email)
            newUser.set_password(password)
            newUser.save()
            
            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return JsonResponse({"signUpSuccess": True})
            
            response = JsonResponse({"signUpSuccess": False, "message": "Authentication failed"})
            response.status_code = INTERNAL_SERVER_ERROR

            return response
            
    else:
        response = JsonResponse(
            {
                "message": "Invalid HTTP method or missing fields to create account"
            }
        )
        response.status_code = BAD_REQUEST
        return response


@csrf_exempt
def login(request: HttpRequest) -> JsonResponse:
    """
    Logs in the user with existing credentials.
    """
    content: dict[str] = json.loads(request.body)
    keys = content.keys()
    if (
        request.method == "PUT"
        and not KeysViewNotContains("username", keys)
        and not KeysViewNotContains("password", keys)
    ):
        if User.objects.filter(content["username"]).exists():
            user = auth.authenticate(username=content["username"], password=content["password"])

            if user is not None:
                auth.login(request, user)
                return JsonResponse({"loginSuccess": True})
            
            response = JsonResponse({"message": "Authentication failed"})
            response.status_code = INTERNAL_SERVER_ERROR

            return response
        else:
            return JsonResponse({"loginSuccess": False, "message": "Account already Exists"})
    else:
        response = JsonResponse(
            {
                "message": "Invalid HTTP method or missing fields to create account"
            }
        )
        response.status_code = BAD_REQUEST
        return response


def index(request: HttpRequest):
    """
    Gives a list of recipes with recipe link via search options.
    """
    if not request.GET.__contains__("ingredients") and not KeysViewNotContains(
        "ingredients", request.GET.keys()
    ):
        response = JsonResponse({"message": "No ingredients given!"})
        response.status_code = BAD_REQUEST
        return response

    ingredients = ""
    options: dict[str] = {}
    if request.GET.__contains__("ingredients"):
        ingredients = request.GET["ingredients"]
    if KeysViewNotContains("ingredients", request.GET.keys()):
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
        response.status_code = BAD_REQUEST
        return response


def addRecipes(request: HttpRequest) -> JsonResponse:
    """
    Gives a list of recipes via a recipe link
    """
    if request.GET.__contains__("nextLink") and request.GET["nextLink"] != "undefined":
        url = fernet.decrypt(request.GET["nextLink"].encode())
        response: JsonResponse = fetch("GET", url)
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
    response.status_code = BAD_REQUEST
    return response

@csrf_exempt
@login_required
def getUserProfile(request: HttpRequest) -> JsonResponse:
    """
    Gives the all the user info needed for their profile.
    """
    user = get_object_or_404(User, request.user)
    return JsonResponse(user.to_dict())

@csrf_exempt
@login_required
def logout(request: HttpRequest) -> JsonResponse:
    """
    Logs out the user from the session.
    """
    auth.logout(request)
    return JsonResponse({"loggedOut": True})
