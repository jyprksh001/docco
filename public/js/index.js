 
       var app=  angular.module('facebunker', ['ngMaterial','ngMessages','ngRoute']);
            app.controller('dateController', function dateController($scope) {
         $scope.myDate = new Date();
        });     
        app.config(function($routeProvider) {
    $routeProvider
    
    .when("/login", {
        templateUrl : "/login.html"
      
    })
    .when("/register", {
        templateUrl : "/register.html"
    })
    ;
});            
       