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
            url: '/blog',
            templateUrl: './app/views/blog/blog.html',
            controller: 'blogCtrl'
        })
        .state('admin',{
            url: '/admin',
            templateUrl: './app/views/admin/admin.html',
            controller: 'adminCtrl'
        })
        .state('admin.addblog',{
            url: '/addblog',
            templateUrl: './app/views/admin/addblog.html',
            controller: 'adminCtrl'
        })
        .state('admin.blogs',{
            url: '/blogs',
            template: '<h1>BLOG LIST</h1>',
            controller: 'adminCtrl'
        })
        .state('admin.content',{
            url: '/page-content',
            template: '<h1>Content</h1>',
            controller: 'adminCtrl'
        })
})