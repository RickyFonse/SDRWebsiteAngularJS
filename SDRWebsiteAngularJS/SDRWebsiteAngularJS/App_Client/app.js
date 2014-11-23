(function(){
    
    var app = angular.module("SDRapp", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "App_Client/Templates/Home/Home.html",
                controller: "HomeController"
            })
            .when("/Property", {
                templateUrl: "App_Client/Templates/Property/Property.html",
                controller: "PropertyController"
            })
            //.when("/Resource", {
            //    templateUrl: "App_Client/Templates/Home/Home.html",
            //    controller: "ResourceController"
            //})
            .otherwise({redirectTo:"/"});
    });
    
}());