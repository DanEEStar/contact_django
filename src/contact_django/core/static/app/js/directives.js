'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
.directive('validatepassword', function () {
    return {
        require: 'ngModel',
        restrict: 'A', // only activate on element attribute
        link: function (scope, elm, attrs, ngModel) {
            ngModel.$parsers.unshift(function (viewValue) {
                console.log(scope);
                var valPasswordValue = attrs.validatepassword;
                var otherPassword = $('#' + valPasswordValue)[0].value;
                var valido = (viewValue === otherPassword);
                ngModel.$setValidity('password', valido);
                return viewValue;
            });
        }
    };
});
