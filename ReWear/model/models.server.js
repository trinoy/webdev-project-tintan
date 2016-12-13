module.exports = function() {
    var mongoose = require('mongoose');
    //var connectionString = 'mongodb://tan:tan111@ds033046.mlab.com:33046/webdevtan';
    var connectionString = 'mongodb://localhost/rw-fall-2016';

    if(process.env.MONGOLAB_URI) {
        connectionString = process.env.MONGOLAB_URI;
    }
    mongoose.connect(connectionString);
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + 'rw-fall-2016');
    });

// If the connection throws an error
    mongoose.connection.on('error',function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

// When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });
    var userModel = require("./user/user.model.server")();
    var rentalModel = require("./rental/rental.model.server")();
    var productReviewModel = require("./productReview/productreview.model.server")();
    var userReviewModel = require("./userReview/userreview.model.server")();
    var messageModel = require("./message/message.model.server")();

    var model = {
        userModel: userModel,
        rentalModel: rentalModel,
        productReviewModel: productReviewModel,
        userReviewModel: userReviewModel,
        messageModel: messageModel
    };

    return model;
};