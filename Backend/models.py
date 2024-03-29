from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

MIN_FLOAT = 0
MAX_RATING = 5
MIN_RATING = 1


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
    Represents recipes from the Edamam food recipes database\n
    Lists are stored as dictionaries with a `list` key that points to the list
    """

    uri = models.CharField(max_length=2000, unique=True)
    name = models.CharField(max_length=200, default="")
    imageUrl = models.URLField(max_length=2000, default="")
    image = models.ImageField(upload_to="images/recipes", default="")
    source = models.URLField(max_length=2000, default="")
    sourceName = models.CharField(max_length=200, default="")

    cautions = models.JSONField(default=dict)
    diets = models.JSONField(default=dict)
    healths = models.JSONField(default=dict)
    cuisineTypes = models.JSONField(default=dict)
    mealTypes = models.JSONField(default=dict)
    dishTypes = models.JSONField(default=dict)
    ingredientTexts = models.JSONField(default=dict)

    def __str__(self) -> str:
        return f"ID: {self.pk}, Name: {self.name}"

    def isNotFullRecipe(self):
        """
        Checks if the recipe object only has uri and name
        by checking if the `uri` is only digits and `source` is empty.
        `True` for only uri and name otherwise `False`.
        """
        return self.uri.isdigit() and len(self.source) <= 0

    def to_dict(self, fullInfo: bool = False):
        image = self.image
        if image:
            image = image.url
        elif len(self.imageUrl) > 0:
            image = self.imageUrl
        else:
            image = ""
        rating = RateRecipe.objects.filter(recipe=self.pk).aggregate(
            models.Avg("rating")
        )["rating__avg"]
        if rating is not None:
            rating = round(rating, 1)
        info = {"id": self.uri, "name": self.name, "image": image, "rating": rating}

        if fullInfo:
            info.update(
                {
                    "source": self.source,
                    "sourceName": self.sourceName,
                    "ingredients": self.ingredientTexts["list"],
                    "cautions": self.cautions["list"],
                    "diets": self.diets["list"],
                    "healths": self.healths["list"],
                    "cuisineTypes": self.cuisineTypes["list"],
                    "mealTypes": self.mealTypes["list"],
                    "dishTypes": self.dishTypes["list"],
                    "nutrients": [
                        nutrient.to_dict()
                        for nutrient in Nutrient.objects.filter(recipe=self.pk)
                    ],
                }
            )

        return info

class RateRecipe(models.Model):
    """
    Represents the rating the user gave for a recipe
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(MIN_RATING), MaxValueValidator(MAX_RATING)]
    )

    def to_dict(self):
        return {"user": self.user.pk, "recipe": self.recipe.pk, "rating": self.rating}


class Nutrient(models.Model):
    """
    Represents nutrients in recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)
    quantity = models.FloatField(validators=[MinValueValidator(MIN_FLOAT)])
    unit = models.CharField(max_length=50)

    def to_dict(self):
        return {"label": self.label, "quantity": self.quantity, "unit": self.unit}


class Ingredient(models.Model):
    """
    Represents the ingredients in recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.FloatField(validators=[MinValueValidator(MIN_FLOAT)])
    measure = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    def to_dict(self):
        return {
            "name": self.name,
            "quantity": self.quantity,
            "measure": self.measure,
            "category": self.category,
        }


class RecentRecipe(models.Model):
    """
    Represents recently viewd recipes from user
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.recipe}, By: {self.user}"

    def to_dict(self, fullInfo: bool):
        recipe = self.recipe.to_dict(fullInfo)
        recipe.update({"user": self.user.username, "date": self.date})
        return recipe
