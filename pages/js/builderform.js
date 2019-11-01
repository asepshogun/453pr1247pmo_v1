// var app =angular.module('ionicApp',['ionic']);
// app.controller('cntr',function($scope){
//   $scope.inputs = [];
//   $scope.addfield=function(){
//     $scope.inputs.push({})
//   }
// })

tx.controller("builderformCtrl", ["$scope", function($scope) {
  $scope.inputs = [];
  $scope.addfield=function(){
    $scope.inputs.push({})
  }

  var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
  });
}])