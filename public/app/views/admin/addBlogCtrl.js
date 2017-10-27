angular.module('app').controller('addBlogCtrl', function($scope,adminSrv ){
    $scope.title =  ''
    $scope.content =  ''
    $scope.pic1 =  ''
    $scope.pic2 =  ''
    $scope.tags =  ''

    $scope.submit = function() {
        let tags = $scope.tags.split(',').map(function(c) {
            return c.trim().toLowerCase();
        })
        let blog = {
            title: $scope.title,
            content: $scope.content,
            tags: tags
        }
        console.log(blog);
        adminSrv.postBlog(blog).then(function(response) {
            console.log(response);
        })
    }
    $scope.cancel = function() {
        if (window.confirm("Click OK to discard changes.")){
            $scope.title =  ''
            $scope.content =  ''
            $scope.pic1 =  ''
            $scope.pic2 =  ''
            $scope.tags =  ''
        } else {
            console.log("canceled")
        }
    }
});