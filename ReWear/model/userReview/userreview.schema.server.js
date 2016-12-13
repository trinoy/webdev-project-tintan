module.exports = function() {
    var mongoose = require("mongoose")
    //var WebsiteSchema = require("../website/website.schema.server")();

var UserReviewSchema = mongoose.Schema({
    by: {type: String, required: true},
    for: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    title: String,
    description: String,
    rating: {type: Number, required: true, default: 0, enum: [0, 1, 2, 3, 4, 5]},
    dateCreated: {type: Date, default: Date.now},
}, {collection: "userreview"});

return UserReviewSchema;
}

