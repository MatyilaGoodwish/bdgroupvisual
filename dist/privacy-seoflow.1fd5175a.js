var privacyModule=angular.module("privacy",["ngRoute"]);privacyModule.config(["$locationProvider","$routeProvider",function(e,r){e.html5Mode({requireBase:!1}).hashPrefix(""),location.replace("#/read"),r.when("/read",{templateUrl:"privacy-information.html"})}]);
//# sourceMappingURL=privacy-seoflow.1fd5175a.js.map
