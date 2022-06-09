
//angular privacy module 
var privacyModule = angular.module("seoflow", ["ngRoute"]);

//configure the privacy module
privacyModule.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
    //setup the hash prefix
    $locationProvider.html5Mode({ requireBase: false }).hashPrefix("");

    //default landing page
    location.replace("#/landing");
    
    $routeProvider.when("/landing", {
        templateUrl: "seoflow-landing.html",
        controller: ["$scope", function ($scope) {
            this.installNow = function () {
                alert("Kindly search for it on the Chrome web store")
            }
        }],
        controllerAs: "landingController"
    })
        .when("/privacy", {
            templateUrl: "privacy-information.html"
        })
        .when("/support", function () {
            window.location.replace("https://tawk.to/chat/5db1f93178ab74187a5b66df/default");
        })
        

}])




















