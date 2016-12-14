module.exports = function() {
    var mongoose = require("mongoose")
    //var WebsiteSchema = require("../website/website.schema.server")();

    var RentalSchema = mongoose.Schema({
        productId: String,
        size:{type: String, enum: ["Small", "Medium", "Large"]},
        price: String,
        lender: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
        renter: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
        available: {type: Boolean, default: true},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "rental"});

    return RentalSchema;
}