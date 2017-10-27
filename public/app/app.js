angular.module('app',['ui.router'])
.config( function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/views/main/home.html',
            controller: 'mainCtrl'
        })
        .state('blog', {
            abstract: true,
            url: '/blog',
            templateUrl: './app/views/blog/blog.html',
            controller: 'blogSearchCtrl'
        })
        .state('blog.search', {
            url: '',
            templateUrl: './app/views/blog/blogSearch.html',
            controller: 'blogSearchCtrl'
        })
        .state('blog.post', {
            url: '/:id',
            templateUrl: './app/views/blog/blogPost.html',
            controller: 'blogPostCtrl'
        })
        .state('admin',{
            url: '/admin',
            templateUrl: './app/views/admin/admin.html',
            controller: 'adminCtrl'
        })
        .state('admin.addblog',{
            url: '/addblog',
            templateUrl: './app/views/admin/addblog.html',
            controller: 'addBlogCtrl'
        })
        .state('admin.blogs',{
            url: '/blogs',
            templateUrl: './app/views/admin/blogs.html',
            controller: 'adminBlogCtrl'
        })
        .state('admin.content',{
            url: '/page-content',
            templateUrl: './app/views/admin/content.html',
            controller: 'adminCtrl'
        })
})