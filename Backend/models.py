from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator

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

    uri = models.CharField(max_length=2000, unique=True, primary_key=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/recipes')
    source = models.URLField(max_length=2000)

    REQUIRED_FIELDS = ["uri"]

    def __str__(self) -> str:
        return f"ID: {self.uri}, Name:{self.name}"

    def getIngredientList(self, fullInfo: bool):
        """
        Gets a list of ingredients with just text when `fullInfo` is `False`,
        otherwise the full info.
        """
        if not fullInfo:
            return [
                str(text)
                for text in IngredientText.objects.filter(recipe=self.uri)
            ]
        else:
            return [
                {
                    "text": str(text),
                    "ingredientsInfo": [
                        ingredient.to_dict()
                        for ingredient in Ingredient.objects.filter(text=text)
                    ],
                }
                for text in IngredientText.objects.filter(recipe=self.uri)
            ]
        
    def to_dict(self, fullInfo: bool):
        info = {
                "id": self.uri,
                "name": self.name,
                "image": self.image.url if self.image else None,
                "source": self.source,
                "ingredients": self.getIngredientList(False)
                # Calculate the average rating of the recipes from users
                # via django builtin aggregate functions `RateRecipe.objects.filter(recipe=self.uri).aggregate(Avg('rating'))`
            }
        
        if fullInfo:
            info.update({
                "cautions": [
                    str(caution)
                    for caution in Caution.objects.filter(recipe=self.uri)
                ],
                "diets": [
                    str(diet)
                    for diet in Diet.objects.filter(recipe=self.uri)
                ],
                "healths": [
                    str(health)
                    for health in Health.objects.filter(recipe=self.uri)
                ],
                "cuisineTypes": [
                    str(cuisineTypes)
                    for cuisineTypes in CuisineType.objects.filter(recipe=self.uri)
                ],
                "mealTypes": [
                    str(mealType)
                    for mealType in MealType.objects.filter(recipe=self.uri)
                ],
                "dishTypes": [
                    str(dishType)
                    for dishType in DishType.objects.filter(recipe=self.uri)
                ],
                "nutrients": [
                    nutrient.to_dict()
                    for nutrient in Nutrient.objects.filter(recipe=self.uri)
                ]
            })
        
        return info


class Diet(models.Model):
    """
    Represents diet labels of recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.label

class Health(models.Model):
    """
    Represents health labels of recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.label

class CuisineType(models.Model):
    """
    Represents cuisne type of recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.label

class MealType(models.Model):
    """
    Represents meal type of recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.label

class DishType(models.Model):
    """
    Represents dish type of recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.label

class RateRecipe(models.Model):
    """
    Represents the rating the user gave for a recipe
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    rating = models.SmallIntegerField()


class Caution(models.Model):
    """
    Represents cautions in recipes
    """

    name = models.CharField(max_length=50, unique=True, primary_key=True)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    


class Nutrient(models.Model):
    """
    Represents nutrients in recipes
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)
    quantity = models.FloatField(validators=[MinValueValidator(0)])
    unit = models.CharField(max_length=50)

    def to_dict(self):
        return {
            "label": self.label,
            "quantity": self.quantity,
            "unit": self.unit
        }

class IngredientText(models.Model):
    """
    Represents ingredient texts that have multiple ingredients in them.
    """

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    text = models.TextField(unique=True)

    def __str__(self) -> str:
        return self.text


class Ingredient(models.Model):
    """
    Represents the ingredients in recipes
    """

    text = models.ForeignKey(IngredientText, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.FloatField(validators=[MinValueValidator(0)])
    measure = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    def to_dict(self):
        return {
            "name": self.name,
            "quantity": self.quantity,
            "measure": self.measure,
            "category": self.category
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


class FavRecipe(models.Model):
    """
    Represents recipes favourited by the user from the Edamam food recipes database
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
