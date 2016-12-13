(function () {
    angular
        .module("ReWear")
        .controller("ProductListController", ProductListController);


    function ProductListController($location,ebayService,$rootScope) {
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
                var encodedKey = $rootScope.keyword.replace(/\s/g,"%20");
                var encodedKey = $rootScope.keyword.replace(/\s/g,",");
            }
            else{
                var encodedKey = window.sessionStorage.keyword.replace(/\s/g,"%20");
            }

            searchProducts(encodedKey);
        }

        init();


        function searchProducts(keyword) {
            ebayService.findProductsByKeyWords(keyword)
                .then(function (products) {
                    vm.products = products.findItemsByKeywordsResponse[0].searchResult[0].item;
                        //res.send(website);
                       // console.log(console.log('error'););
                    },
                    function (error) {
                       //
                        console.log('error');

                    }
                )

        }

    }
})();
