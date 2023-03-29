from django.conf import settings
from Backend import views
from django.urls import path, include
from django.conf.urls.static import static

app_name = "backend"

# API Urls
apipatterns = [
    # Get Csrf Token
    path("checkLogin/", views.checkLogin, name="checkLogin"),
    # Gives a list of recipes with recipe link via search options
    path("fetchRecipes/",views.getRecipes, name="index"),
    # Gives a list of recipes via a recipe link
    path("addRecipes/", views.addRecipes, name="addRecipes"),
    # Sign up 
    path("signup/", views.signUp, name="signUp"),
    # Login
    path("login/", views.login, name="login"),
    # Logout
    path("logout/", views.logout, name="logout"),
    # Get User info
    path("profile/", views.getUserProfile, name="profile"),
    # Updates the user's information
    path("updateUserInfo/", views.updateUserInfo, name="updateUserInfo"),
    # Get Recent Recipes from the requested user
    path("getRecentRecipes/", views.getRecentRecipes, name="getRecentRecipes"),
    # Get most rated recipes
    path("getMostRatedRecipes/", views.getMostRatedRecipes, name="getMostRatedRecipes"),
    # Sets the recently viewed recipe for the logged in user
    path("setRecentRecipe/", views.setRecentRecipe, name="setRecentRecipe"),
    # Get a single recipe
    path("getRecipe/", views.getRecipe, name="getRecipe"),
    # Set a rating on a recipe
    path("setRating/",views.setRating, name="setRating"),
    # Testing to convert recipes from recipes.json to ones in edamam api
    path("testRecipe/", views.convertToFullRecipe, name="testRecipe")
]

urlpatterns = [
    # Loads the frontend page
    path("", views.page, name="page"),
    path("Home/", views.page, name="homePage"),
    path("Search/", views.page, name="searchOptions"),
    path("SignUp/", views.page, name="signUp"),
    path("Login/", views.page, name="Login"),
    path("Profile/", views.page, name="Profile"),
    path("RecipeInfo/<str:id>", views.recipePage, name="RecipeInfo"),
    # API URLs
    path("api/", include(apipatterns))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
