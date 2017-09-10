angular.module('app').directive('blogDir', function(){
    return {
        restrict: 'E',
        templateUrl: './app/views/blog/blog-dir.html',
        scope: {
            blog: '=blog'
        }
    }
});