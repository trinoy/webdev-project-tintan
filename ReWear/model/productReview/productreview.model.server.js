module.exports = function() {
    var mongoose = require("mongoose");
    var ProductReviewSchema = require("./productreview.schema.server.js")();
    var ProductReviewModel = mongoose.model("ProductReviewModel", ProductReviewSchema);
    //var model={};

    var api = {
        createProductReview: createProductReview,
        findProductReviewByUser: findProductReviewByUser,
        findReviewsByProduct: findReviewsByProduct,
        deleteProductReview: deleteProductReview
    };
    return api;



    function createProductReview(review){
        return ProductReviewModel.create(review);
    }

    function findProductReviewByUser(userId){
        return ProductReviewModel.find({by: userId})
            .populate("by", "username firstName lastName")
            .exec();//--- returns an array
    }

    function deleteProductReview(reviewId){
        return ProductReviewModel.remove(
            {
                _id: reviewId
            });
    }

    function findReviewsByProduct(productId) {
        return ProductReviewModel.find({'productId': productId})
            .populate("by", "username firstName lastName")
            .exec();
    }

}