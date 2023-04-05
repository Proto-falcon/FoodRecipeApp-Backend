from sqlalchemy import create_engine
from pandas import read_sql_table
from surprise import Reader
from surprise import Dataset
from surprise import KNNBasic

sim_options = {
    "name": "msd",
    "user_based": True,  # Compute  similarities between users
}

algo = KNNBasic(sim_options=sim_options)

engine = create_engine("sqlite:///db.sqlite3")
with engine.connect() as conn, conn.begin():
    reviews = read_sql_table("Backend_raterecipe", conn, columns=["user_id", "recipe_id", "rating"])
    print("Loaded all reviews")
    
reader = Reader(rating_scale=(0, 5))
reviews = Dataset.load_from_df(reviews, reader)

startIndex = 0
nRatings = len(reviews.raw_ratings)
subRatingChunk = int(nRatings / 7)
reviews.raw_ratings = reviews.raw_ratings[startIndex:(startIndex + subRatingChunk)]
trainingSet = reviews.build_full_trainset()
print("Finished building a training Set")

algo.fit(trainingSet)
print("Finished training recommender Algorithm")