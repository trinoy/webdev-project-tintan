(function () {
    angular
        .module("ReWear")
        .controller("AdminController", AdminController);


    function AdminController($location, $routeParams, ebayService,UserService,ProductReviewService,UserReviewService) {
        var vm =this;
     /*   vm.users = [{firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 },
            {firstName : "Trinoy", lastName: "Hazarika", email : "email@email.com", phone: "6173808036" ,price:21 }];

        vm.prodReviews = [{title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" },
            {title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" }];

        vm.userReviews = [{title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" },
            {title : "It is awesome", by: "trinoy", description : "I really Liked it", rating: 2,dateCreated:"12-10-2016" }];
*/


        vm.getAllUserReview = getAllUserReview;
        vm.getAllProductReview = getAllProductReview;
        vm.getAllUser = getAllUser;
        vm.deleteUser = deleteUser;
        vm.deleteUserReview = deleteUserReview;
        vm.deleteProductReview = deleteProductReview;

        function init(){
            getAllUserReview();
            getAllProductReview();
            getAllUser();
        }

        init();

        function getAllUserReview() {
            UserReviewService.findAllUserReviews()
                .success(function (usersReviews) {
                    vm.userReviews = usersReviews;
                    vm.userReviewCount = usersReviews.length;
                })
                .error(function () {
                    vm.error = "Unable to fetch user reviews";
                });
        }

        function getAllProductReview() {
            ProductReviewService.findAllProductReviews()
                .success(function (reviews) {
                    vm.prodReviews = reviews;
                    vm.prodReviewCount = reviews.length;
                })
                .error(function () {
                    vm.error = "Unable to fetch product reviews";
                });
        }

        function getAllUser() {
            UserService.findAllUser()
                .success(function (allUsers) {
                    vm.users = allUsers;
                    vm.usersCount = allUsers.length;
                })
                .error(function () {
                    vm.error = "Unable to fetch users ";
                });
        }


        function deleteUser(userId) {
            UserService.deleteUser(userId)
                .success(function (response) {
                    getAllUser();
                })
                .error(function () {
                    vm.error = "Unable to fetch users ";
                });
        }

        function deleteUserReview(id) {
            UserReviewService.deleteUserReview(id)
                .success(function (response) {
                    getAllUserReview();
                })
                .error(function () {
                    vm.error = "Unable to fetch users ";
                });
        }

        function deleteProductReview(id) {
            ProductReviewService.deleteProductReview(id)
                .success(function (response) {
                    getAllProductReview();
                })
                .error(function () {
                    vm.error = "Unable to fetch users ";
                });
        }



    }
})();




