module.exports = function(app) {
   var model = require("./model/models.server.js")();
    require("./services/user.service.server.js")(app, model);
    require("./services/rental.service.server.js")(app, model);
    require("./services/message.service.server.js")(app, model);
    require("./services/productReview.service.server.js")(app, model);
    require("./services/userReview.service.server.js")(app, model);
};