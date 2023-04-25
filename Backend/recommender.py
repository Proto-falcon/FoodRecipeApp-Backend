from pandas import read_sql_table
from sqlalchemy import create_engine
from surprise import Reader
from surprise import Dataset
from surprise import KNNBasic
from multiprocessing import Manager, Process

USER_BASED = False

sim_options = {
    "name": "msd",
    "user_based": USER_BASED,  # Compute similarities between users
}

algo = KNNBasic(sim_options=sim_options)

manager = Manager()
recommenderInfo = manager.dict()
recommenderInfo.update(
    {
        "algo": algo,
        "trainSet":None,
        "training": False
    }
)

def instantiateTrain():
    trainAlgo = Process(target=reTrainAlgo, daemon=True)
    recommenderInfo.update({"training": True})
    trainAlgo.start()


def reTrainAlgo():
    engine = create_engine("sqlite:///db.sqlite3")
    with engine.connect() as conn, conn.begin():
        reviews = read_sql_table(
            "Backend_raterecipe", conn, columns=["user_id", "recipe_id", "rating"]
            , chunksize=15_000
        )
        reviews = next(reviews)
    reader = Reader(rating_scale=(0, 5))
    reviews = Dataset.load_from_df(reviews, reader)
    trainingSet = reviews.build_full_trainset()

    algo = KNNBasic(sim_options=sim_options)
    
    algo.fit(trainingSet)
    print("Algorithm finished training")

    recommenderInfo.update(
        {
            "algo": algo,
            "trainSet": algo.trainset,
            "training": False
        }
    )
