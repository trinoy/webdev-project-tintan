(function () {
    angular
        .module("ReWear")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/landing/landing.view.client.html",
                controller: "LandingController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/products", {
                templateUrl: "views/products/productList.view.client.html",
                controller: "ProductListController",
                controllerAs: "model"
            })
            .when("/productDetail/:eid", {
                templateUrl: "views/products/productDetail.view.client.html",
                controller: "ProductDetailController",
                controllerAs: "model"
            });

            /*.otherwise({
                redirectTo: "/"
            });*/
    }

})();