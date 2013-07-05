myApp.controller('TestController', function($scope, $http) {
    $http.get('/api/contact/').success(function(data) {
        $scope.data = data;
    });

    $scope.savePerson = function(person) {
        console.log(person);
        $http.post('/api/contact/', person);
        $scope.data.push(person);
    }
});