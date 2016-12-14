(function () {
    angular
        .module("ReWear")
        .controller("ProductDetailController", ProductDetailController);


    function ProductDetailController($location, $routeParams, ebayService, $sce, RentalService, $rootScope) {

        var vm = this;
        vm.sizes = ['Small', 'Medium', 'Large'];
        vm.elementId = $routeParams["eid"];
        vm.checkSafeHtml = checkSafeHtml;
        vm.reviews;
        vm.sellers;
        vm.selectedOption;
        vm.singleModel = 1;
        vm.mode = 'Rent';
        vm.selectedOption = "Small";
        vm.init = init;
        vm.alerts = [];
        vm.createRental = createRental;
        vm.updateRental = updateRental;
        vm.findRentalsByProduct = findRentalsByProduct;
        vm.addAlert = addAlert;

        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };

        function init() {

            getProductDetails();
            getRelatedProducts();

            vm.reviews = [{
                title: "It is awesome",
                by: "trinoy",
                description: "I really Liked it",
                rating: 2,
                dateCreated: "12-10-2016"
            },
                {
                    title: "It is awesome",
                    by: "trinoy",
                    description: "I really Liked it",
                    rating: 2,
                    dateCreated: "12-10-2016"
                }];


        }

        init();

        function addAlert() {
            vm.alerts.push({msg: 'Operation Process Successfully'});
        };

        function checkSafeHtml() {
            return $sce.trustAsHtml(vm.productDetail.Description);
        }

        function getProductDetails() {
            ebayService.getProductDetail(vm.elementId)
                .then(function (product) {
                        vm.productDetail = product.Item;
                    },
                    function (error) {
                        //
                        console.log('error');
                    }
                )
        }

        function getRelatedProducts() {
            ebayService.getRelatedProducts(vm.elementId)
                .then(function (relproduct) {
                        vm.relProds = relproduct.getRelatedCategoryItemsResponse.itemRecommendations.item;
                    },
                    function (error) {
                        //
                        console.log('error');

                    })
        }

        function createRental() {
            var rental = {};
            rental.productId = vm.productDetail.ItemID;
            rental.size = vm.selectedOption;
            rental.price = vm.price;
            rental.lender = $rootScope.currentUser;
            RentalService.createRental(rental)
                .success(function (response) {
                    addAlert();
                    if (response === '0') {
                        //addAlert();
                    } else {
                        vm.mode = 'Rent';
                        vm.price = "";
                        //$location.url("#/productDetail/"+ vm.productDetail.ItemID);
                    }
                })
                .error(function (data) {
                    console.log(data);
                });

        }

        function updateRental(rental) {
            var rentalId = rental._id;
            rental.renter = $rootScope.currentUser;
            rental.available = false;
            RentalService.updateRental(rentalId, rental)
                .success(function (response) {
                    addAlert();
                    if (response === '0') {
                        //addAlert();
                    } else {
                        vm.mode = 'Rent';
                        vm.price = "";
                    }
                })
                .error(function (data) {
                    console.log(data);
                });
        }

        function findRentalsByProduct() {
            var size = vm.selectedOption;
            RentalService.findRentalsByProduct(vm.productDetail.ItemID, size)
                .success(function (rentals) {
                    if (rentals === '0') {
                        //addAlert();
                    } else {
                        vm.rentals = rentals;
                    }
                })
                .error(function (data) {
                    console.log(data);
                });
        }
    }

})();