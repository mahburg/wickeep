angular.module('app').controller('adminBlogCtrl', function ($scope, adminSrv) {
    $scope.blogs = [{title: "Loading..."}];
    $scope.checkAll = false;
    $scope.checkCount = 0;

    $scope.selectAll = function () {
        let count = $scope.blogs.reduce(function (sum, blog) {
            return blog.selected ? sum + 1 : sum;
        }, 0)
        let select = !count;
        $scope.checkCount = count;
        $scope.blogs.forEach(function (blog) {
            blog.selected = select;
        });
        $scope.selectBlog()
    }
    $scope.selectBlog = function () {
        let count = $scope.blogs.reduce(function (sum, blog) {
            return blog.selected ? sum + 1 : sum;
        }, 0)
        $scope.checkCount = count;
        $scope.checkAll = !!count;
    }

    $scope.delete = function (id) {
        if (window.confirm("Are you sure you want to DELETE the selected blog post?")) {
            console.log('delete ' + getSelectedIDs()[0]);
            adminSrv.deleteBlog(getSelectedIDs()[0]).then(function(resp) {
                getBlogs()
                alert('Blog Deleted')
            })    
        } else {
            console.log('cancel');
        }
    }
    $scope.unpublish = function () {
        if (window.confirm("Are you sure you want to UNPUBLISH the selected blog post(s)?")) {
            adminSrv.unpublishBlogs(getSelectedIDs()).then(function(response) {
                console.log(response);
                getBlogs()
            })
        } else {
            console.log('canceled');
        }
    }
    $scope.publish = function () {
        adminSrv.publishBlogs(getSelectedIDs()).then(function(response) {
            getBlogs()
            alert('Blogs Published')
        }).catch(console.log)
    }
    $scope.edit = function (id) {
        console.log('edit ' + id);
        console.log(getSelectedIDs());
    }

    function getSelectedIDs() {
        return $scope.blogs.reduce(function (arr, blog) {
            if (blog.selected) {
                arr.push(blog.id)
            }
            return arr
        }, [])
    }
    function getBlogs() {
        adminSrv.getBlogs().then(function (response) {
            $scope.blogs = response.data
            $scope.selectBlog()    
        })
    }
    getBlogs()
});