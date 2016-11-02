/**
 * Created by bcojocariu on 11/1/2016.
 */

angular.module('myApp')
.controller('homeController',homeController);

homeController.$inject = ['$scope'];

function homeController($scope) {
    $scope.Title = 'Home';
}