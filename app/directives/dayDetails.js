/**
 * Created by bcojocariu on 11/2/2016.
 */
angular.module('myApp')
    .directive('dayDetails',dayDetails);

function dayDetails(){
    return{
        restrict: 'EA',
        template: '<h1>Beautiful day {{name}}</h1>',
        controller : 'dayDetailsController'
    }
}