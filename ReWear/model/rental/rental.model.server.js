module.exports = function () {
    var mongoose = require("mongoose");
    var RentalSchema = require("./rental.schema.server.js")();
    var RentalModel = mongoose.model("RentalModel", RentalSchema);
    //var model={};

    var api = {
        createRental: createRental,
        findRentalById: findRentalById,
        findRentalsByLender: findRentalsByLender,
        findRentalsByRenter: findRentalsByRenter,
        findRentalsByProduct: findRentalsByProduct,
        updateRental: updateRental,
        deleteRental: deleteRental
    };
    return api;


    function createRental(rental) {
        return RentalModel.create(rental);
    }

    function findRentalById(rentalId) {
        // RentalModel.find({_id: userId}); //--- returns an array
        return RentalModel.findById(rentalId);
    }

    function findRentalsByLender(userId) {
        return RentalModel.find( //use alternatively findOne
            {
                lender: userId
            });
    }

    function findRentalsByRenter(userId) {
        return RentalModel.find( //use alternatively findOne
            {
                renter: userId
            });
    }

    function findRentalsByProduct(productId, size) {
        return RentalModel.find( //use alternatively findOne
            {
                productId: productId,
                size: size,
                available: true
            })
            .populate("lender", "firstName lastName email phone url")
            .exec();;
    }

    function updateRental(rentalId, rental) {
        return RentalModel.update(
            {
                _id: rentalId
            },
            {
                available: rental.available,
                renter: rental.renter
            });
    }

    function deleteRental(rentalId) {
        return RentalModel.remove(
            {
                _id: rentalId
            });
    }

}