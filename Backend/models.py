from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    """
    Our User models is a sub-class of Django's AbstractUser
    So we can make use of Django's authentication system
    """

    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return f"{self.username}, {self.email}"

    def to_dict(self):
        return {
            "username": self.username,
            "email": self.email,
        }
    

class Recipe(models.Model):
    """
    Represents recipes from the Edamam food recipes database
    """

    uri = models.CharField(max_length=2000, unique=True)

    REQUIRED_FIELDS = ["uri"]


class RecentRecipe(models.Model):
    """
    Represents recently viewd recipes from user
    """
    user = models.ForeignKey(User, to_field="username", on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, to_field="uri", on_delete=models.CASCADE)
    dateAdded = models.DateTimeField(auto_now=True)

    def to_dict(self):
        return {
            "user": self.user.username,
            "id": self.recipe.uri,
            "date": self.dateAdded
        }


class FavRecipe(models.Model):
    """
    Represents recipes favourited by the user from the Edamam food recipes database
    """
    user = models.ForeignKey(User, to_field="username", on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, to_field="uri", on_delete=models.CASCADE)
    dateAdded = models.DateTimeField(auto_now=True)
