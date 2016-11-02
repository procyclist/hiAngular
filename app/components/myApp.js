/**
 * Created by bcojocariu on 11/1/2016.
 */

(function(){
    'use strict';

 angular.module('myApp',['ui.router'])
        .config(RoutesConfig);

    //RoutesConfig
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        /*$stateProvider
            .state('home',{
                url: '/',
                template: '<h1>Home</h1>',
                controller: 'homeController',
                controllerAs: 'hctrl'
                
            })

            .state('login',{
                url:'/login',
                template: '<h1>Login></h1>',
                controller: 'loginController',
                controllerAs: 'lctrl'
            });*/

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'app/components/home/home.html',
            controller: 'homeController',
            controllerAs: 'hctrl'
        };

        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'app/components/login/login.html',
            controller: 'loginController'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(loginState);
    }


})();