from Backend import views
from django.urls import path

app_name = "backend"
urlpatterns = [
    # Get Csrf Token
    path("getToken/", views.getCsrfToken, name="getCsrfToken"),
    # Gives a list of recipes with recipe link via search options
    path("fetchRecipes/",views.index, name="index"),
    # Gives a list of recipes via a recipe link
    path("addRecipes/", views.addRecipes, name="addRecipes"),
    # Sign up 
    path("signup/", views.signUp, name="signUp"),
    # Login
    path("login/", views.login, name="login"),
    # Logout
    path("logout/", views.logout, name="logout"),
    # Get User info
    path("profile/", views.getUserProfile, name="profile")
]
