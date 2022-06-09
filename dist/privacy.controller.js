angular.module("privacy",["ngRoute"]).config(["$locationProvider","$routeProvider",function(e,r){e.html5Mode({requireBase:!1}).hashPrefix(""),location.replace("#/read"),r.when("/read",{templateUrl:"privacy-information.html"})}]);
//# sourceMappingURL=privacy.controller.js.map
