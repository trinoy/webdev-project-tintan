module.exports = function() {
    var mongoose = require("mongoose")
    //var WebsiteSchema = require("../website/website.schema.server")();

    var MessageSchema = mongoose.Schema({
        by: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true},
        for: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true},
        byEmail: String,
        subject: String,
        description: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now},
    }, {collection: "message"});

    return MessageSchema;
}