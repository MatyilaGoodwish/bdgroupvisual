angular.module("seoflow",["ngRoute"]).config(["$locationProvider","$routeProvider",function(o,e){o.html5Mode({requireBase:!1}).hashPrefix(""),location.replace("#/landing"),e.when("/landing",{templateUrl:"seoflow-landing.html",controller:["$scope",function(o){this.installNow=function(){alert("Kindly search for it on the Chrome web store")}}],controllerAs:"landingController"}).when("/privacy",{templateUrl:"privacy-information.html"}).when("/support",(function(){window.location.replace("https://tawk.to/chat/5db1f93178ab74187a5b66df/default")}))}]);
//# sourceMappingURL=seoflow.controller.js.map
