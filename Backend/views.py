from django.http import HttpRequest, JsonResponse
from Backend import FetchFood
from Backend.utilities import KeysViewNotContains, fetch_object_or_404
from cryptography.fernet import Fernet
from requests import request as fetch
import json
from Backend.models import *
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, render
from django.middleware.csrf import get_token
from django.http import Http404

key = Fernet.generate_key()
fernet = Fernet(key)

BAD_REQUEST = 400
INTERNAL_SERVER_ERROR = 500

# Create your views here.
def checkLogin(request: HttpRequest) -> JsonResponse:
    if request.method == "GET":
        try:
            user = get_object_or_404(User, username=request.user.username)
            return JsonResponse({"token": get_token(request), "user": user.to_dict()})
        except (Http404):
            return JsonResponse({"token": get_token(request), "user": False})
    else:
        response = JsonResponse({"message": "Invalid http method"})
        response.status_code = BAD_REQUEST
        return response


def page(request: HttpRequest):
    """
    Loads the frontend page.
    """
    if request.method == "GET":
        return render(request, "pages/index.html")
    else:
        return render(request, "error404.html")


def signUp(request: HttpRequest) -> JsonResponse:
    """
    Creates a new account for the user via creating a new user.
    """
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
            return JsonResponse(
                {"signUpSuccess": False, "message": "Account already Exists"}
            )
        else:
            newUser = User.objects.create(username=username, email=email)
            newUser.set_password(password)
            newUser.save()

            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return JsonResponse({"signUpSuccess": True})

            response = JsonResponse(
                {"signUpSuccess": False, "message": "Authentication failed"}
            )
            response.status_code = INTERNAL_SERVER_ERROR

            return response
    else:
        response = JsonResponse(
            {"message": "Invalid HTTP method or missing fields to create account"}
        )
        response.status_code = BAD_REQUEST
        return response


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
        userwithUsername = auth.authenticate(
            username=content["username"], password=content["password"]
        )
        userWithEmail = auth.authenticate(
            email=content["username"], password=content["password"]
        )

        if userwithUsername is not None:
            auth.login(request, userwithUsername)
            user: User = fetch_object_or_404(
                User, username=userwithUsername.get_username()
            )
            return JsonResponse({"loginSuccess": True, "user": user.to_dict()})
        elif userWithEmail is not None:
            if userWithEmail is not None:
                auth.login(request, userWithEmail)
                user: User = fetch_object_or_404(
                    User, username=userWithEmail.get_username()
                )
                return JsonResponse({"loginSuccess": True, "user": user.to_dict()})
        response = JsonResponse({"loginSuccess": False, "message": "Account doesn't Exist"})
        response.status_code = INTERNAL_SERVER_ERROR

        return response
    else:
        response = JsonResponse(
            {"loginSuccess": False, "message": "Invalid HTTP method or missing fields to create account"}
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


@login_required
def getUserProfile(request: HttpRequest) -> JsonResponse:
    """
    Gives the all the user info needed for their profile.
    """
    user = get_object_or_404(User, username=request.user.username)
    return JsonResponse(user.to_dict())


@login_required
def logout(request: HttpRequest) -> JsonResponse:
    """
    Logs out the user from the session.
    """
    try:
        auth.logout(request)
        return JsonResponse({"token": get_token(request), "loggedOut": True})
    except (Http404):
        return JsonResponse({"loggedOut": False, "message": "Failed to logout"})
