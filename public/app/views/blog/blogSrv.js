angular.module('app').service('blogSrv', function($http){
    this.getBlogs = function() {
        return $http({
            method: "GET",
            url: '/api/blogs/published'
        })
    }
    this.getBlog = function(id) {
        return $http({
            method: "GET",
            url: '/api/blog/'+id
        })
    }
    this.getBlogTags =function(id) {
        return $http({
            method: "GET",
            url: '/api/blogtags/'+id
        })
    }
});