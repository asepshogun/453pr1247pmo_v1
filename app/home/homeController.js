var app = angular.module('myApp');
app.controller('HomeController', function PhoneList($scope, $http) {
    $scope.loadFeeds = function () {
        $http.get('http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017').then(
            function successCallback(response) {
                $scope.greeting = response.data.data;
            },
            function errorCallback(response) {
                alert("Unable to perform get request");
            }
        );
    };
    $scope.loadFeeds();//you have leave this line pf code
	
  //   $http.get('http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017').then(
		// function successCallback(response) {
  //       	$scope.greeting = response.data.data;
  //       },
  //       function errorCallback(response) {
  //       	alert("Unable to perform get request");
  //     	}
  //   );
    
    $http.post('https://apifactory.telkom.co.id:8243/hcm/auth/v1/token', {
		"username": "402256",
		"password": "Sflozi14"
	}).then(
    	function successCallback(response) {
        	$scope.token = response.data.data.jwt.token;
    	}, 
    	function errorCallback(response) {
        	alert("Unable to perform get request");
      	}
    );
});