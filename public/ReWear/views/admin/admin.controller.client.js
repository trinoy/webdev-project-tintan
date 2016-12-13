(function () {
    angular
        .module("ReWear")
        .controller("AdminController", AdminController);


    function AdminController($location, $routeParams, ebayService, $sce) {
        var vm =this;
        vm.users = [{firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 },
            {firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 }];

        vm.prodReviews = [{title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" },
            {title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" }];

        vm.userReviews = [{title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" },
            {title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" }];
    }
})();




