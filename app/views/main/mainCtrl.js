angular.module('app').controller('mainCtrl', function($scope, $location, $anchorScroll){
    $scope.showNav = false;
    $scope.toggleNav = function() {
        $scope.showNav = !$scope.showNav;
    }
    $scope.scrollTo = function(elem) {
        $location.hash(elem);
        $anchorScroll.yOffset = 80;
        $anchorScroll();
        $scope.showNav = false;
    }
});