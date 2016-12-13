module.exports = function() {
    var mongoose = require("mongoose");
    var MessageSchema = require("./message.schema.server.js")();
    var MessageModel = mongoose.model("MessageModel", MessageSchema);
    //var model={};

    var api = {
        createMessage: createMessage,
        deleteMessage: deleteMessage,
        findMessageByUserId: findMessageByUserId,
        findMessageForUserId: findMessageForUserId
    };
    return api;



    function createMessage(msg){
        return MessageModel.create(msg);
    }

    function deleteMessage(msgId){
        return MessageModel.remove(
            {
                _id: msgId
            });
    }

    function findMessageByUserId(userId) {
        return MessageModel.find({'by': userId});
    }

    function findMessageForUserId(userId) {
        return MessageModel.find({'for': userId});
    }

}