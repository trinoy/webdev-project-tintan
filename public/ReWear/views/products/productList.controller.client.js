(function () {
    angular
        .module("ReWear")
        .controller("ProductListController", ProductListController);


    function ProductListController($location,ebayService,$rootScope,usSpinnerService,ngProgressLite) {
        var vm = this;
        vm.searchProducts = searchProducts;
        var products1 = [{title: "card title1", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title2", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"},
            {title: "card title3", cardText: "card Text 1", cardText2: "card Text 2"}]
        vm.products1 = products1;

        vm.searchTerm = "";
        vm.search = search;


        vm.startSpin = function() {
           // usSpinnerService.spin('spinner-1');
            ngProgressLite.start();
        };

        vm.stopSpin = function() {
           // usSpinnerService.stop('spinner-1');
            ngProgressLite.done();
        };


        function search(){
            vm.searchTerm = vm.searchTerm.replace(/\s/g,",")
            searchProducts(vm.searchTerm)
            $rootScope.keyword = vm.searchTerm;
            window.sessionStorage.keyword = vm.searchTerm;
           // $location.url("/products");
        }


        function init(){
            if(!$rootScope)
            {
                //var encodedKey = $rootScope.keyword.replace(/\s/g,"%20");
                var encodedKey = $rootScope.keyword.replace(/\s/g,",");
                searchProducts(encodedKey);
            }
            else if(window.sessionStorage.keyword !=undefined){
                var encodedKey = window.sessionStorage.keyword.replace(/\s/g,",");
                searchProducts(encodedKey);
            }
        }

        init();


        function searchProducts(keyword) {
            vm.startSpin();
            ebayService.findProductsByKeyWords(keyword)
                .then(function (products) {
                        vm.stopSpin();
                    vm.products = products.findItemsByKeywordsResponse[0].searchResult[0].item;
                        //res.send(website);
                       // console.log(console.log('error'););
                    },
                    function (error) {
                       //
                        vm.stopSpin();
                        console.log('error');

                    }
                )

        }

    }
})();
