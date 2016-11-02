/**
 * Created by bcojocariu on 11/2/2016.
 */

angular.module('myApp')
.service('loginService',loginService);

function loginService(){
    var loggedName = "";
    this.say = function(){
        console.log("Logged in");
    }

    this.saveName = function(name){
        loggedName = name;
        console.log(loggedName);
    }

    this.getLoginName = function(){
        return loggedName;
    }

    this.sayHello = function(){
        console.log("Hellooo");
    }
}