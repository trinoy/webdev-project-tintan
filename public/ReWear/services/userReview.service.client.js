(function () {
    angular
        .module('ReWear')
        .factory("UserReviewService", UserReviewService);

    function UserReviewService($http) {
        var api = {
            "createUserReview": createUserReview,
            "findUserReviewByUserId": findUserReviewByUserId,
            "findUserReviewForUserId": findUserReviewForUserId,
            "deleteUserReview": deleteUserReview

        };
        return api;

        function createUserReview(userId, review) {
            var url = "/api/user/"+userId+"/userReview";
            return $http.post(url, review);
        }

        function findUserReviewByUserId(userId) {
            var url = "/api/user/"+userId+"/userReviewBy";
            return $http.get(url);
        }

        function findUserReviewForUserId(userId) {
            var url = "/api/user/"+userId+"/userReviewFor";
            return $http.get(url);
        }

        function deleteUserReview(reviewId) {
            var url = "/api/userReview/"+reviewId;
            return $http.delete(url);

        }
    }

})();