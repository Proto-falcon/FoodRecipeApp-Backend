from Backend.recommender import algos, reviews, NUM_OF_INSTANCES, subRatingChunk

def reTrain():
    startIndex = 0
    for i in range(NUM_OF_INSTANCES):
        reviews.raw_ratings = reviews.raw_ratings[startIndex:(startIndex + subRatingChunk)]
        trainingSet = reviews.build_full_trainset()
        algos[0].fit(trainingSet)
        startIndex += subRatingChunk

