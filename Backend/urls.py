from Backend import views
from django.urls import path

app_name = "backend"
urlpatterns = [
    # Gives a list of recipes with recipe link via search options
    path("",views.index, name="index"),
    # Gives a list of recipes via a recipe link
    path("addRecipes/", views.addRecipes, name="addRecipes")
]
