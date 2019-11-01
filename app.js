var myApp = {};
var mainView = {};
var rightView = {};
var $$$ = Dom7;

var tx = angular.module('AngularApp', []);

tx.run(function() {
    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
})


tx.config(function() {  window.location.hash = "#!/pages/builderform.html"; })

// tx.config(['$stateProvider', '$urlRouterProvider', 
//   function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('landing', {
//         url : '/landing',
//         templateUrl: 'pages/home.html',
//         controller: 'calendarCtrl'
//       })
//       .state('builder', {
//         url : '/builder',
//         templateUrl: 'pages/builderform.html',
//         controller: 'builderformCtrl'
//       });
      
//       $urlRouterProvider.otherwise('/landing');
//   }
// ]);

tx.controller("RootController", function ($scope) {
	$scope.salam = "hallo";
});