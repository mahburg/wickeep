angular.module('app').service('adminSrv', function($http){
    this.postBlog = function (blogObj) {
        return $http({
            method: "POST",
            url: "/api/blog",
            data: blogObj
        })
    }
    this.getBlogs = function () {
        return $http({
            method: "GET",
            url: "/api/blogs"
        })
    }
});