from django.conf import settings
from Backend import views
from django.urls import path
from django.conf.urls.static import static

app_name = "backend"
urlpatterns = [
    # Loads the frontend page
    path("", views.page, name="page"),
    path("Home/", views.page, name="homePage"),
    path("Search/", views.page, name="searchOptions"),
    path("SignUp/", views.page, name="signUp"),
    path("Login/", views.page, name="Login"),
    path("Profile/", views.page, name="Profile"),
    # Get Csrf Token
    path("api/checkLogin/", views.checkLogin, name="checkLogin"),
    # Gives a list of recipes with recipe link via search options
    path("api/fetchRecipes/",views.getRecipes, name="index"),
    # Gives a list of recipes via a recipe link
    path("api/addRecipes/", views.addRecipes, name="addRecipes"),
    # Sign up 
    path("api/signup/", views.signUp, name="signUp"),
    # Login
    path("api/login/", views.login, name="login"),
    # Logout
    path("api/logout/", views.logout, name="logout"),
    # Get User info
    path("api/profile/", views.getUserProfile, name="profile"),
    # Updates the user's information
    path("api/updateUserInfo/", views.updateUserInfo, name="updateUserInfo"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
