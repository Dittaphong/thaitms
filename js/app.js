angular.module('myApp',['ngRoute']);

var myApp = angular.module('myApp');

myApp.config(function($routeProvider) { 
    $routeProvider
    .when('/', { 
        templateUrl : "home.html",
        controller: "indexController"
    })
    .when('/order', { 
        templateUrl : "order.html",
        controller: "orderController"
    })
    .when('/order/add', { 
        templateUrl : "view/order/add.html",
        controller: "orderController"
    })
    .otherwise({
    	redirecTo:'/'
    });
});

myApp.controller("indexController", function ($scope) { 
	$scope.pagename='DASHBOARD';
	
});

myApp.controller("orderController", function ($scope) {
	var obj = [
			{ 'fname': 'Dittaphong1','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong2','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong3','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong4','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong5','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong1','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong2','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong3','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong4','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong5','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong1','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong2','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong3','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong4','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong5','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong1','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong2','lname': 'Nilnama','age': '26'},
			{ 'fname': 'Dittaphong3','lname': 'Nilnama','age': '26'},
		];
	$scope.isNewPaper=true;
	$scope.pagename='ORDER Transport';
	$scope.message=obj;
});


	

