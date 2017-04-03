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
       