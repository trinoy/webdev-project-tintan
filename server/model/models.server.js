module.exports = function(app) {

    var connectionString = 'mongodb://localhost:27017/test';
    //var connectionString = 'mongodb://webdev1:ABcd1234@ds033126.mlab.com:33126/mongo_th';

    if(process.env.HEROKU_MONGODB_DB_PASSWORD) {
        connectionString = process.env.HEROKU_MONGODB_URL_PREFIX +
            process.env.HEROKU_MONGODB_DB_USERNAME + ":" +
            process.env.HEROKU_MONGODB_DB_PASSWORD +
            process.env.HEROKU_MONGODB_URL_SUFFIX +
            process.env.HEROKU_MONGODB_DB;
        console.log(connectionString);
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    return 1;
}