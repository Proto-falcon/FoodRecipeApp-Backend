from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    '''
    Our User models is a sub-class of Django's AbstractUser
    So we can make use of Django's authentication system
    '''
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    image = models.ImageField(upload_to='images')

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return f"{self.username}, {self.email}"

    def to_dict(self):
        return {
            'username': self.username,
            'email': self.email,
            'image': self.image.url if self.image else None,
        }

class Recipe(models.Model):
    """
    Represents recipes in the food database
    """
    name = models.CharField(max_length=50)
    source = models.CharField(max_length=512)
    image = models.ImageField(max_length=1000, upload_to="recipeImages")
    ingredients = ArrayField(base_field=models.CharField(max_length=50))
