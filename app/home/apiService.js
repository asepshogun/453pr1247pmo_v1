//loginService.js
var app = angular.module('myApp');
app.factory('ApiService', function() {
	return {
		getdata : function() {
			$http.get('http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017').then(
			function successCallback(response) {
	        	return $scope.greeting = response.data.data;
	        },
	        function errorCallback(response) {
	        	alert("Unable to perform get request");
	      	}
		}
	}
});