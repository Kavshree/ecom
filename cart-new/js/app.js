var myApp=angular.module('shoppingApp',['ngRoute','listApp']);

myApp.config(function($routeProvider) {
	 $routeProvider
	 .when('/details', {
        templateUrl: 'details.html'
    })
	.otherwise({
        templateUrl: 'list.html',
        controller: 'listCtrl'
    });
})