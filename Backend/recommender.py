from sys import argv
from pandas import read_sql_table
from sqlalchemy import create_engine
from surprise import Reader
from surprise import Dataset, Trainset
from surprise import KNNBasic

USER_BASED = False

sim_options = {
    "name": "msd",
    "user_based": USER_BASED,  # Compute similarities between users
}

algo = KNNBasic(sim_options=sim_options)
trainingSet: Trainset = None

def trainAlgo():
    engine = create_engine("sqlite:///db.sqlite3")
    with engine.connect() as conn, conn.begin():
        reviews = read_sql_table(
            "Backend_raterecipe", conn, columns=["user_id", "recipe_id", "rating"]
        )
    reader = Reader(rating_scale=(0, 5))
    reviews = Dataset.load_from_df(reviews, reader)

    global trainingSet
    trainingSet = reviews.build_full_trainset()
    algo.fit(trainingSet)

if "runserver" in argv:
    trainAlgo()