(function () {
    angular
        .module("ReWear")
        .controller("LandingController", ff);

    function ff($location,$rootScope) {
        var vm = this;
        vm.searchTerm = "";
        vm.search = search;


        function search(){
            alert("hi");
            $rootScope.keyword = vm.searchTerm;
            window.sessionStorage.keyword = vm.searchTerm;
            $location.url("/products");
        }

        function init() {

        }

        init();

    }

})();
