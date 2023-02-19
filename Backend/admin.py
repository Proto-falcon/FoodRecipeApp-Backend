from django.contrib import admin
from Backend.models import Recipe, User, FavRecipe, RecentRecipe
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Recipe)
admin.site.register(RecentRecipe)
admin.site.register(FavRecipe)