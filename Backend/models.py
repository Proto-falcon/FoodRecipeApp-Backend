from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    '''
    Our User models is a sub-class of Django's AbstractUser
    So we can make use of Django's authentication system
    '''
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return f"{self.username}, {self.email}"

    def to_dict(self):
        return {
            'username': self.username,
            'email': self.email,
        }

# class RecentRecipe(models.Model()):
#     """
#     Recently viewd recipes from user
#     """
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     uri = models.CharField(max_length=2000)


# class FavRecipe(models.Model):
#     """
#     Represents recipes favourited by the user from the Edamam food recipes database
#     """
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     uri = models.CharField(max_length=2000)

class Recipe(models.Model):
    """
    Represents recipes from the Edamam food recipes database
    """
    userRecent = models.ManyToManyField(User, "recent_recipes")
    userFav = models.ManyToManyField(User, "favourite_recipes")
    uri = models.CharField(max_length=2000)

