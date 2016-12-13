(function () {
    angular
        .module('ReWear')
        .factory("ProductReviewService", ProductReviewService);

    function ProductReviewService($http) {
        var api = {
            "createProductReview": createProductReview,
            "findProductReviewByUser": findProductReviewByUser,
            "findReviewsByProduct": findReviewsByProduct,
            "deleteProductReview": deleteProductReview

        };
        return api;

        function createProductReview(userId, review) {
            var url = "/api/user/"+userId+"/productReview";
            return $http.post(url, review);
        }

        function findProductReviewByUser(userId) {
            var url = "/api/user/"+userId+"/productReview";
            return $http.get(url);
        }

        function findReviewsByProduct(productId) {
            var url = "/api/product/"+productId+"/productReview";
            return $http.get(url);
        }

        function deleteProductReview(reviewId) {
            var url = "/api/productReview/"+reviewId;
            return $http.delete(url);

        }
    }

})();