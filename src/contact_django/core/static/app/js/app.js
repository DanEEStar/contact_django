// Declare app level module which depends on filters, and services
window.myApp = angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'static/app/partials/partial1.html', controller: 'TestController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
