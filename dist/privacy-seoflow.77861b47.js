//angular privacy module 
var privacyModule = angular.module("privacy", [
    "ngRoute"
]);
//configure the privacy module
privacyModule.config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
        //setup the hash prefix
        $locationProvider.html5Mode({
            requireBase: false
        }).hashPrefix("");
        location.replace("#/read");
        //setup the privacy routes
        $routeProvider.when("/read", {
            templateUrl: "privacy-information.html"
        });
    }
]);

//# sourceMappingURL=privacy-seoflow.77861b47.js.map
