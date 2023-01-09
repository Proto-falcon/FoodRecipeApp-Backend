from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Recipe(models.Model):
    """
    Represents recipes in the food database
    """
    name = models.CharField(max_length=50)
    source = models.CharField(max_length=512)
    image = models.ImageField(max_length=1000, upload_to="recipeImages")
    ingredients = ArrayField(base_field=models.CharField(max_length=50))
