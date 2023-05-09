import json
from requests import request as fetch
from cryptography.fernet import Fernet
from surprise import Trainset
from surprise import KNNBasic
from django.http import HttpRequest
from django.http import JsonResponse
from django.http import HttpResponse
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.middleware.csrf import get_token
from django.http import Http404
from Backend.utilities import incorrectRequest
from Backend.utilities import fetch_object_or_404
from Backend.utilities import createOrGetFullRecipe
from Backend.utilities import makeFullRecipe
from Backend.utilities import fetchSimiliarRecipe
from Backend import FetchFood
from Backend.models import User
from Backend.models import Recipe
from Backend.models import RateRecipe
from Backend.models import RecentRecipe
from Backend.models import MIN_RATING
from Backend.models import MAX_RATING
from Backend.recommender import recommenderInfo
from Backend.recommender import instantiateTrain
from Backend.recommender import USER_BASED

key = Fernet.generate_key()
fernet = Fernet(key)

TIME_TO_LIVE = round(365.25*24*60*60)

BAD_REQUEST = 400
NOT_FOUND = 404
INTERNAL_SERVER_ERROR = 500

RECENT_LIMIT = 5
MOST_RATED_LIMIT = 5

MIN_ESTIMATED_RATING = 3
RECOMMEND_LIMIT_PER_USER = 5
RECOMMEND_LIMIT = 20

training = False


def encryptLink(results: dict[str]):
    """
    Encrypts the link to next set of recipes from Edamam API within the dictionary
    """
    try:
        if results["addRecipesLink"] is not None:
            results["addRecipesLink"] = fernet.encrypt(
                results["addRecipesLink"].encode()
            ).decode()
        else:
            results["addRecipesLink"] = ""
    except KeyError:
        return results
    return results


# Create your views here.
def checkLogin(request: HttpRequest) -> JsonResponse:
    """
    Gives the CSRF token and checks that the user is logged in.
    
    """
    if request.method == "GET":
        try:
            user = get_object_or_404(User, username=request.user.username)
            return JsonResponse({"token": get_token(request), "user": user.to_dict()})
        except Http404:
            return JsonResponse({"token": get_token(request), "user": False})
    else:
        return incorrectRequest("Invalid http method", BAD_REQUEST)


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

            return incorrectRequest(
                "Authentication failed", INTERNAL_SERVER_ERROR, signUpSuccess=False
            )
    else:
        return incorrectRequest(
            "Invalid HTTP method or missing fields to create account", BAD_REQUEST
        )


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
            user: User = fetch_object_or_404(User, username=user.get_username())
            return JsonResponse({"loginSuccess": True, "user": user.to_dict()})

        return incorrectRequest(
            "Account doesn't Exist", INTERNAL_SERVER_ERROR, loginSuccess=False
        )
    else:
        return incorrectRequest(
            "Invalid HTTP method or missing fields to create account",
            BAD_REQUEST,
            loginSuccess=False,
        )


def getRecipes(request: HttpRequest):
    """
    Gives a list of recipes with recipe link via search options.
    """
    if len(request.GET) <= 0:
        return incorrectRequest("No ingredients or options given!", BAD_REQUEST)

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
        results = FetchFood.fetchfood(ingredients, options, exclusions, False)
        results = encryptLink(results)
        return JsonResponse(results)
    else:
        return incorrectRequest("No ingredients given!", BAD_REQUEST)


def addRecipes(request: HttpRequest) -> JsonResponse:
    """
    Gives a list of recipes via a recipe link
    """
    if "nextLink" in request.GET and request.GET["nextLink"] != "undefined":
        url = fernet.decrypt(request.GET["nextLink"].encode(), TIME_TO_LIVE)
        response: JsonResponse = fetch("GET", url)
        results = FetchFood.serializeRecipeResults(response)
        results = encryptLink(results)
        return JsonResponse(results)

    return incorrectRequest("invalid URL", BAD_REQUEST)


def setRecentRecipe(request: HttpRequest):
    """
    Adds or updates a recent recipe that the user has viewed.\n
    Even if it's an anonymous user the recipe will still be added to the database.
    """
    if request.method == "POST":
        content: dict[str, str] = json.loads(request.body)
        uri = str(content["id"])
        fullRecipe: dict[str] = {}
        recipe: Recipe = None
        if uri.isdigit():
            recipe = Recipe.objects.get(uri=uri)
        else:
            fullRecipe = FetchFood.fetchRecipe(uri)
            recipe = createOrGetFullRecipe(uri, fullRecipe)

        try:
            user = User.objects.get(pk=request.user.pk)

            # Gets recent recipes in most recent order from first to last
            recentRecipes = RecentRecipe.objects.filter(user=user).order_by("-date")
            if len(recentRecipes) > RECENT_LIMIT:
                recentRecipes[len(recentRecipes) - 1].delete()  # Deletes the least recent recipe

            recentRecipe = RecentRecipe.objects.get_or_create(recipe=recipe, user=user)[
                0
            ]
            recentRecipe.save()

            return HttpResponse()
        except User.DoesNotExist:
            return HttpResponse()

    return incorrectRequest("Invaild HTTP request", BAD_REQUEST, added=False)


@login_required
def getRecentRecipes(request: HttpRequest):
    """
    Gives list of recent recipes from the user that it requests has seen
    """
    if request.method == "GET":
        recentRecipes: list[dict[str]] = []
        results = RecentRecipe.objects.filter(user=request.user.pk).order_by("-date")

        for recentRecipe in results:
            recentRecipes.append(recentRecipe.to_dict(True))

        return JsonResponse({"results": recentRecipes})

    return incorrectRequest("Invalid HTTP method", BAD_REQUEST)


@login_required
def getMostRatedRecipes(request: HttpRequest):
    """
    Gets the most rated recipes from user
    """
    if request.method == "GET":
        results = [
            ratedRecipe.recipe.to_dict(False)
            for ratedRecipe in RateRecipe.objects.filter(user=request.user.pk).order_by(
                "-rating"
            )[:MOST_RATED_LIMIT]
        ]
        return JsonResponse({"results": results})

    return incorrectRequest("Invalid HTTP method", BAD_REQUEST)


def getRecipe(request: HttpRequest):
    """
    Gives a recipe by its database primary key
    """
    if request.method == "GET" and "id" in request.GET:
        recipe = {"minRating": MIN_RATING, "maxRating": MAX_RATING}
        try:
            id = request.GET["id"]
            recipeObj = Recipe.objects.get(uri=id)

            if recipeObj.isNotFullRecipe():
                recipeResult = fetchSimiliarRecipe(recipeObj)
                if "message" not in recipeResult:
                    recipeObj = makeFullRecipe(
                        id, recipeObj, recipeResult
                    )
                else:
                    return incorrectRequest(
                        recipeResult["message"], INTERNAL_SERVER_ERROR
                    )

            recipe.update(recipeObj.to_dict(True))
        except Recipe.DoesNotExist:
            recipe.update(FetchFood.fetchRecipe(request.GET["id"]))
            recipeObj = None

        try:
            if recipeObj is not None:
                userRating = RateRecipe.objects.get(
                    recipe=recipeObj, user=request.user.pk
                ).rating
                recipe.update({"userRating": userRating})
        except RateRecipe.DoesNotExist:
            recipe.update({"userRating": 0})

        return JsonResponse(recipe)

    return incorrectRequest("Invald HTTP method or query missing ID", BAD_REQUEST)


@login_required
def recommendRecipes(request: HttpRequest):
    """
    Recommends recipes to the user
    """
    if request.method == "GET":
        trainingSet: Trainset = recommenderInfo["trainSet"]
        algo: KNNBasic = recommenderInfo["algo"]
        if trainingSet is None:
            return JsonResponse({"results": []})
        recommendList: list[dict[str]] = []
        if USER_BASED:
            try:
                userId = trainingSet.to_inner_uid(int(request.user.pk))
            except ValueError:
                return JsonResponse({"results": []})
            ownItemRatings = algo.xr[userId]
            users = algo.get_neighbors(userId, RECOMMEND_LIMIT//RECOMMEND_LIMIT_PER_USER)
            for id in users:
                itemLimit = RECOMMEND_LIMIT_PER_USER
                for item in algo.xr[id]:
                    if itemLimit <= 0:
                        break
                    if (algo.estimate(id, item[0])[0] > MIN_ESTIMATED_RATING) and (item[0] not in ownItemRatings):
                        transformedItem = Recipe.objects.get(
                            pk=trainingSet.to_raw_iid(item[0])
                        ).to_dict(False)
                        recommendList.append(transformedItem)
                        itemLimit -= 1
        else:
            try:
                ownItemRatings = RateRecipe.objects.filter(user=request.user.pk)
                RecipeId: any = None
                for i in range(MIN_RATING, MAX_RATING + 1):
                    filteredOwnItems = ownItemRatings.filter(rating=i)
                    if filteredOwnItems.exists():
                        RecipeId = filteredOwnItems[0].recipe.uri
                        break
                if RecipeId is None:
                    raise ValueError
            except (ValueError):
                return JsonResponse({"results": []})
            for id in algo.get_neighbors(trainingSet.to_inner_iid(int(RecipeId)), int(RECOMMEND_LIMIT * 2)):
                if len(recommendList) >= RECOMMEND_LIMIT:
                    break
                try:
                    item = Recipe.objects.get(uri=int(trainingSet.to_raw_iid(id)))
                    if item.uri not in ownItemRatings.values_list("uri",flat=True):
                        recommendList.append(item.to_dict())
                except (ValueError, Recipe.DoesNotExist):
                    pass
        return JsonResponse({"results": recommendList})
    return incorrectRequest("Invald HTTP method or no query added", BAD_REQUEST)


@login_required
def setRating(request: HttpRequest):
    """
    Sets the rating of a recipe
    """
    content: dict[str, int | str] = json.loads(request.body)
    if request.method == "PUT" and "id" in content and "rating" in content:
        uri = str(content["id"])
        fullRecipe: dict[str] = {}
        recipe: Recipe = None
        if uri.isdigit():
            recipe = Recipe.objects.get(uri=uri)
        else:
            fullRecipe = FetchFood.fetchRecipe(uri)
            recipe = createOrGetFullRecipe(uri, fullRecipe)

        try:
            recipe = Recipe.objects.get(uri=content["id"])
        except Recipe.DoesNotExist:
            return incorrectRequest("ID doesn't match with a recipe", NOT_FOUND)

        user = User.objects.get(pk=request.user.pk)

        try:
            rateRecipe = RateRecipe.objects.get(user=user, recipe=recipe)
            rateRecipe.rating = content["rating"]
        except RateRecipe.DoesNotExist:
            rateRecipe = RateRecipe(recipe=recipe, user=user, rating=content["rating"])

        rateRecipe.save()
        
        global training
        if not training:
            training = True
            instantiateTrain()
            training = False
            

        return HttpResponse()
    return incorrectRequest("Invald HTTP method or query missing ID", BAD_REQUEST)


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
        user: User = fetch_object_or_404(User, username=request.user.get_username())
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

    return incorrectRequest("Invalid operation or user doesn't exist", BAD_REQUEST)


@login_required
def logout(request: HttpRequest) -> JsonResponse:
    """
    Logs out the user from the session.
    """
    try:
        auth.logout(request)
        return JsonResponse({"token": get_token(request), "loggedOut": True})
    except Http404:
        return incorrectRequest("Failed to logout", loggedOut=False)
