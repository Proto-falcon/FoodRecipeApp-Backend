# FoodRecipeApp-Backend

Backend Of the Food Recipe Search web application

It gets a list of recipes from a get request then does a request to an external food recipe api to get the results,
then responnds with the first result that includes the name, source, ingredients and image.

## **How to run website:**

Open FoodRecipeApp directory

### **Install dependencies**

With conda which comes with miniconda (recommended):
<br/>
Website to install miniconda if don't already have it: https://docs.conda.io/en/latest/miniconda.html
<br/>
Then do ./ on the downloaded .sh file to begin installation
```
conda env create -f environment.yml
```

With pip you'll need numpy, and a C compiler:
<br/>
Only need python 3.10 or later to use pip.
<br/>
On linux you can run:
```
sudo apt-get install python3.8
```
Install any python 3.10 version from this website if don't already have it: https://www.python.org/downloads/

```
pip install -r requirements.txt
```

### **Setup Database**

Download recipes.csv and reviews.csv from this site: https://www.kaggle.com/datasets/irkaal/foodcom-recipes-and-reviews

Move the files to the same directory as this README.md then run this command to load the json files:
```
python CSVtoJSON.py
```

### **Run Server**

Move to the FoodRecipeApp directory and run these commands to start the server:
```
python manage.py migrate
python manage.py runserver
```

You can open the site using: **localhost:8000** on the browser