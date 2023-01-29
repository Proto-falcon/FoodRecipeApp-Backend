from django.contrib import admin
from Backend.models import Recipe, User
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Recipe)