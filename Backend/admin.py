from django.contrib import admin
from Backend.models import Recipe, User, RecentRecipe, RateRecipe
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(User, UserAdmin)

class RecipeAdmin(admin.ModelAdmin):
    list_display = ("id", "uri", "name", "source")

class RecentRecipeAdmin(admin.ModelAdmin):
    list_display = ("user", "recipe", "date")

class RateRecipeAdmin(admin.ModelAdmin):
    list_display = ("user", "recipe", "rating")

admin.site.register(Recipe, RecipeAdmin)
admin.site.register(RateRecipe, RateRecipeAdmin)
admin.site.register(RecentRecipe, RecentRecipeAdmin)
