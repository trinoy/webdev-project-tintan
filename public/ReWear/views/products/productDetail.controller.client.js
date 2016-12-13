(function () {
    angular
        .module("ReWear")
        .controller("ProductDetailController", ProductDetailController);


    function ProductDetailController($location, $routeParams, ebayService,$sce) {

        var vm = this;
        vm.init = init;
        vm.elementId = $routeParams["eid"];
        vm.checkSafeHtml = checkSafeHtml;
        vm.reviews;
        vm.sellers;


        function checkSafeHtml() {
            return $sce.trustAsHtml(vm.productDetail.Description);
        }

        function init() {

            getProductDetails();
            getRelatedProducts();

            vm.reviews = [{title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" },
                {title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" }];
            vm.lenters = [{firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 },
                {firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 }]
        }

        init();

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

    }

})();