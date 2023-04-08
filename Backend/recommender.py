from pandas import read_sql_table
from sqlalchemy import create_engine
from surprise import Reader
from surprise import Dataset
from surprise import KNNBasic

sim_options = {
    "name": "msd",
    "user_based": True,  # Compute  similarities between users
}

algo = KNNBasic(sim_options=sim_options)

engine = create_engine("sqlite:///db.sqlite3")
    
reader = Reader(rating_scale=(0, 5))

with engine.connect() as conn, conn.begin():
    reviews = read_sql_table(
        "Backend_raterecipe", conn, columns=["user_id", "recipe_id", "rating"]
    )
reviews = Dataset.load_from_df(reviews, reader)
trainingSet = reviews.build_full_trainset()
algo.fit(trainingSet)
