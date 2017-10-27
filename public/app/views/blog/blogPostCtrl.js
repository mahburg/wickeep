angular.module('app').controller('blogPostCtrl', function ($scope, $stateParams, blogSrv) {
    $scope.blog = {title: "Loading..."}    
    $scope.tags = []
    
    function getTags(id) {
        blogSrv.getBlogTags(id).then(function (response) {
            console.log(response.data);
            $scope.tags = response.data
        })
    }  
    function getBlog() {
        let id = $stateParams.id;
        blogSrv.getBlog(id).then(function (response) {
            let blog = response.data[0];
            let contentArr = blog.content.split('\n')
            blog.contentArr = contentArr;
            $scope.blog = response.data[0]
        })
        getTags(id)        
    }
    getBlog()
});