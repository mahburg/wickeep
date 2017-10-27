angular.module('app').controller('adminBlogCtrl', function($scope, adminSrv){
    $scope.blogs = [];
    function getBlogs() {
        adminSrv.getBlogs().then(function(response) {
            console.log(response);
            $scope.blogs = response.data
        })
    }
    getBlogs()
});