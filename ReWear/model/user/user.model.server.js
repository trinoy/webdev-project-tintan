module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);
    //var model={};

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findAllUser: findAllUser,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        deleteUser: deleteUser,
        findUserByFacebookId: findUserByFacebookId,
        // findFollowersByUserId: findFollowersByUserId,
        // findLikesByUserId: findLikesByUserId,
        addFollowersForUserId: addFollowersForUserId,
        addLikesForUserId: addLikesForUserId
    };
    return api;


    function findAllUser(){
        return UserModel.find();
    }

    function createUser(user) {
        return UserModel.create(user);
    }

    function findUserById(userId) {
        // UserModel.find({_id: userId}); //--- returns an array
        return UserModel.findById(userId)
            .populate("followers", "username firstName lastName url")
            .populate("likes", "username firstName lastName url")
            .exec(); //--- returns an object
    }

    function findUserByCredentials(username, password) {
        return UserModel.find( //use alternatively findOne
            {
                username: username,
                password: password
            });
    }

    function findUserByUsername(username) {
        return UserModel.findOne( //use alternatively findOne
            {
                username: username,
            });
    }

    function updateUser(userId, user) {
        return UserModel.update(
            {
                _id: userId
            },
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                address: user.address,
                url: user.url
            });
    }

    function deleteUser(userId) {
        return UserModel.remove(
            {
                _id: userId
            });
    }

    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId});
    }

    /*function findFollowersByUserId(userId) {
        return UserModel.findById(userId).populate("followers", "username firstName lastName").exec();
    }

    function findLikesByUserId(userId) {
        return UserModel.findById(userId).populate("likes", "username firstName lastName").exec();
    }*/

    function addFollowersForUserId(userId, sellerId) {
        return UserModel
            .findById(sellerId)
            .then(function(user){
                user.followers.push(userId);
                user.save();
            });
    }

    function addLikesForUserId(userId, sellerId) {
        return UserModel
            .findById(sellerId)
            .then(function(user){
                user.likes.push(userId);
                user.save();
            });
    }

}