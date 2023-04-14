from pandas import read_sql_table
from sqlalchemy import create_engine
from surprise import Reader
from surprise import Dataset
from surprise import KNNBasic
from surprise import Trainset
from multiprocessing import Manager, Process

sim_options = {
    "name": "msd",
    "user_based": True,  # Compute  similarities between users
}

algo = KNNBasic(sim_options=sim_options)

trainingSet: Trainset = None

manager = Manager()
recommenderInfo = manager.dict()


def instantiateTrain():
    trainAlgo = Process(target=reTrainAlgo, daemon=True)
    trainAlgo.start()


def reTrainAlgo():
    engine = create_engine("sqlite:///db.sqlite3")
    with engine.connect() as conn, conn.begin():
        reviews = read_sql_table(
            "Backend_raterecipe", conn, columns=["user_id", "recipe_id", "rating"]
            ,chunksize=100_000
        )
        reviews = next(reviews)
    
    reader = Reader(rating_scale=(0, 5))
    reviews = Dataset.load_from_df(reviews, reader)
    trainingSet = reviews.build_full_trainset()

    algo = KNNBasic(sim_options=sim_options)
    algo.fit(trainingSet)

    recommenderInfo.update({"algo": algo, "trainSet":trainingSet})
