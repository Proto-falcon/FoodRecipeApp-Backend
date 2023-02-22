from django.http import HttpRequest, JsonResponse, HttpResponse
from Backend import FetchFood
from Backend.utilities import fetch_object_or_404
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

RECENT_LIMIT = 3

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
    return render(request, "pages/index.html")

def recipePage(request: HttpRequest, id: str):
    """
    Loads the recipe info page
    """
    return render(request, "pages/index.html")

def signUp(request: HttpRequest) -> JsonResponse:
    """
    Creates a new account for the user via creating a new user.
    """
    content: dict[str] = json.loads(request.body)
    keys = content.keys()
    if (
        request.method == "POST"
        and "username" in keys
        and "email" in keys
        and "password" in keys
    ):
        username: str = content["username"]
        email: str = content["email"]
        password = content["password"]
        if User.objects.filter(username=username).exists():
            return JsonResponse(
                {"signUpSuccess": False, "message": "Account already Exists"}
            )
        else:
            if len(username) > 50:
                return JsonResponse(
                    {"signUpSuccess": False, "message": "Username too long"}
                )
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
    if request.method == "PUT" and "username" in keys and "password" in keys:
        user = auth.authenticate(
            username=content["username"], password=content["password"]
        )

        if user is not None:
            auth.login(request, user)
            user: User = fetch_object_or_404(
                User, username=user.get_username()
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


def getRecipes(request: HttpRequest):
    """
    Gives a list of recipes with recipe link via search options.
    """
    if len(request.GET) <= 0:
        response = JsonResponse({"message": "No ingredients or options given!"})
        response.status_code = BAD_REQUEST
        return response

    ingredients = ""
    if "ingredients" in request.GET:
        ingredients = request.GET["ingredients"]
    
    options: dict[str] = {}
    exclusions: list[str] = []
    for option in request.GET.keys():
        if option != "ingredients" and option not in options:
            if option == "excluded":
                exclusions = request.GET.getlist(option)
            else:
                options[option] = request.GET.getlist(option)

    if len(ingredients) > 0 or len(options) > 0 or len(exclusions):
        results = FetchFood.fetchfood(ingredients, options, exclusions)
        try:
            if results["addRecipesLink"] is not None:
                results["addRecipesLink"] = fernet.encrypt(
                    results["addRecipesLink"].encode()
                ).decode()
            else:
                results.pop("addRecipesLink")
            return JsonResponse(results)
        except (KeyError):
            return JsonResponse(results)
    else:
        response = JsonResponse({"message": "No ingredients given!"})
        response.status_code = BAD_REQUEST
        return response


def addRecipes(request: HttpRequest) -> JsonResponse:
    """
    Gives a list of recipes via a recipe link
    """
    if "nextLink" in request.GET and request.GET["nextLink"] != "undefined":
        url = fernet.decrypt(request.GET["nextLink"].encode(), 31557600)
        response: JsonResponse = fetch("GET", url)
        # exclusions = []
        # if "excluded" in request.GET:
        #     exclusions = request.GET.getlist("excluded")
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
def setRecentRecipe(request: HttpRequest):
    """
    Adds or updates a recent recipe that the user has viewed.
    """
    if request.method == "POST":
        try:
            user = User.objects.get(pk=request.user.pk)
        except (User.DoesNotExist):
            response = JsonResponse({"added": False, "message": "User doesn't exist"})
            response.status_code = BAD_REQUEST
            return response
        
        content: dict[str,str] = json.loads(request.body)
        try:
            recipe = Recipe.objects.get(uri=content["id"])
        except (Recipe.DoesNotExist):
            recipe: Recipe = Recipe(uri=content["id"])
        
        recipe.save()

        try:
            recentRecipes = RecentRecipe.objects.filter().order_by('-dateAdded') # Gets recent recipes in most recent order from first to last
            if len(recentRecipes) >= RECENT_LIMIT:
                recentRecipes[len(recentRecipes)-1].delete() # Deletes the least recent recipe
            recentRecipe = RecentRecipe.objects.get(recipe=recipe, user=user)
        except (RecentRecipe.DoesNotExist):
            recentRecipe = RecentRecipe(recipe=recipe, user=user)

        recentRecipe.save()

        return HttpResponse()

    response = JsonResponse({"added": False, "message": "Invaild HTTP request"})
    response.status_code = BAD_REQUEST
    return response


@login_required
def getRecentRecipes(request: HttpRequest):
    """
    Gives list of recent recipes from the user that it requests has seen
    """
    if request.method == "GET":
        recentRecipes: list[dict[str]] = []
        results = RecentRecipe.objects.filter(user=request.user.pk).order_by('-dateAdded')
        
        for recipe in results:
            recentRecipes.append(FetchFood.fetchRecipe(recipe.recipe.uri))
        
        return JsonResponse({"results": recentRecipes})


    response = JsonResponse({"message": "Invalid HTTP method"})
    response.status_code = BAD_REQUEST
    return response


def getRecipe(request: HttpRequest):
    """
    Gives a recipe by its uri
    """
    if request.method == "GET" and "id" in request.GET:
        return JsonResponse(FetchFood.fetchRecipe(request.GET["id"]))
    response = JsonResponse({"message": "Invald HTTP method and query"})
    response.status_code = BAD_REQUEST
    return response

@login_required
def getUserProfile(request: HttpRequest) -> JsonResponse:
    """
    Gives the all the user info needed for their profile.
    """
    user = get_object_or_404(User, pk=request.user.pk)
    return JsonResponse(user.to_dict())


@login_required
def updateUserInfo(request: HttpRequest):
    """
    Updates the user's information
    """
    if request.method == "PUT":
        user = fetch_object_or_404(User, username=request.user.get_username())
        if user is not False:
            content: dict[str, str] = json.loads(request.body)
            messages: dict[str, str] = {}
            if "username" in content:
                user.username = content["username"]
                messages["usernameMsg"] = "Updated Username"
                user.save()

            if "email" in content:
                user.email = content["email"]
                messages["emailMsg"] = "Updated Email"
                user.save()
            
            if "password" in content:
                user.set_password(content["password"])
                messages["passwordMsg"] = "Updated Password"
                user.save()
                auth.update_session_auth_hash(request, user)

            return JsonResponse(messages)
    
    response = JsonResponse({"message": "Invalid operation or user doesn't exist"})
    response.status_code = BAD_REQUEST
    return response


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
