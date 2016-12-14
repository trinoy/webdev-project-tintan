module.exports = function() {
    var mongoose = require("mongoose")
    //var WebsiteSchema = require("../website/website.schema.server")();

    var ProductReviewSchema = mongoose.Schema({
        by: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true},
        productId: {type: String, required: true},
        title: String,
        description: String,
        rating: {type: Number, required: true, default: 0, enum: [0, 1, 2, 3, 4, 5]},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "productreview"});

    return ProductReviewSchema;
}
