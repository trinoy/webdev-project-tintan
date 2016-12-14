module.exports = function() {
    var mongoose = require("mongoose");
    var UserReviewSchema = require("./userreview.schema.server.js")();
    var UserReviewModel = mongoose.model("UserReviewModel", UserReviewSchema);
    //var model={};

    var api = {
        createUserReview: createUserReview,
        deleteUserReview: deleteUserReview,
        findUserReviewByUserId: findUserReviewByUserId,
        findAllUserReview:findAllUserReview,
        findUserReviewForUserId: findUserReviewForUserId
    };
    return api;

    function findAllUserReview(review){
        return UserReviewModel.find({});
    }

    function createUserReview(review){
        return UserReviewModel.create(review);
    }

    function deleteUserReview(reviewId){
        return UserReviewModel.remove(
            {
                _id: reviewId
            });
    }

    function findUserReviewByUserId(userId){
        return UserReviewModel.find({'by': userId})
            .populate("by", "username firstName lastName")
            .populate("for", "username firstName lastName")
            .exec();
        //return UserReviewModel.find(userId).populate("websites", "name").exec();
    }

    function findUserReviewForUserId(userId) {
        return UserReviewModel.find({'for': userId})
            .populate("by", "username firstName lastName")
            .populate("for", "username firstName lastName")
            .exec();
    }

}