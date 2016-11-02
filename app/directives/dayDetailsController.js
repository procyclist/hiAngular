angular.module('myApp')
    .controller('dayDetailsController', dayDetailsController);

dayDetailsController.$inject = ['$scope','loginService'];

function dayDetailsController($scope,loginService){
    $scope.name = loginService.getLoginName();
    console.log("details: ", $scope.name);
    console.log("Logged in: ",loginService.getLoginName());
    loginService.sayHello();
}