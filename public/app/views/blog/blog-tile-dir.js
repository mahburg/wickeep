angular.module('app').directive('blogTileDir', function(){
    return {
        restrict: 'E',
        templateUrl: './app/views/blog/blog-tile-dir.html',
        scope: {
            blog: '=blog'
        }
    }
});