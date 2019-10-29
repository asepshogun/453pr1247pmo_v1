var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

var tx = angular.module("AngularApp", [])
tx.run(function() {
    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
})

tx.config(function() {  window.location.hash = "#!/examples/home.html"; })

// .controller("RootController", ["$scope", function($scope) { $scope.title = "Examples";  }])

// .controller("HomeController", ["$scope", "$http", function($scope, $http) {
//   $scope.title = "News Feeds";
//   $scope.nasa = [];

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss"
//   }).then(function(data){
//     $scope.nasa = data.data.items;
//   });

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/smart-home/"
//   }).then(function(data){
//     $scope.tech = data.data.items;
//   });

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/gaming/"
//   }).then(function(data){
//     $scope.games = data.data.items;
//   });
// }])

tx.controller("CalendarCtrl", ["$scope", "$http", function($scope, $http) {
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    $http({
        "method" : "GET",
        "url" : "http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017"
    }).then(
        function successCallback(response) {
            $scope.greeting = response.data.data;
            console.log(response.data.data)
        },
        function errorCallback(response) {
            alert("Unable to perform get request");
        }
    );
    // // With custom date format
    // var calendarDateFormat = myApp.calendar({
    //     input: '#ks-calendar-date-format',
    //     dateFormat: 'DD, MM dd, yyyy'
    // });
    // // With multiple values
    // var calendarMultiple = myApp.calendar({
    //     input: '#ks-calendar-multiple',
    //     dateFormat: 'M dd yyyy',
    //     multiple: true
    // });
    // // Range Picker
    // var calendarRange = myApp.calendar({
    //     input: '#ks-calendar-range',
    //     dateFormat: 'M dd yyyy',
    //     rangePicker: true
    // });
    // Inline with custom toolbar
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#ks-calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        header: false,
        footer: false,
        toolbarTemplate: '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
            '</div>' +
            '<div class="center"></div>' +
            '<div class="right">' +
            '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>',
        onOpen: function(p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function() {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function() {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function(p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
        }
    });
}])
