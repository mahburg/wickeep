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
    this.getBlog = function (id) {
        return $http({
            method: "GET",
            url: "/api/blog/"+id
        })
    } 
    this.updateBlog = function(id) {
        return $http({
            method: "PUT",
            url: "/api/blog/"+id
        })
    }

    this.deleteBlog = function(id) {
        return $http({
            method: "DELETE",
            url: "/api/blog/"+id
        })
    }
    this.publishBlogs = function(arr) {
        return $http({
            method: "PUT",
            url: "/api/blogs/publish",
            data: arr
        })
    }
    this.unpublishBlogs = function(arr) {
        return $http({
            method: "PUT",
            url: "/api/blogs/unpublish",
            data: arr
        })
    }
});