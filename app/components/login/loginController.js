/**
 * Created by bcojocariu on 11/2/2016.
 */

angular.module('myApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$state','loginService'];

function loginController($scope,$state,loginService){

    $scope.goToHome = function(personName){
        $state.go('home');
        loginService.say();
        loginService.saveName(personName);

    }
}