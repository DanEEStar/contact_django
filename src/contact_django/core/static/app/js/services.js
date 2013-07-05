    myApp.factory('apiService', function($http, $q) {
    var myService = {
        getMunicipalityAsync : function() {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'http://192.168.1.151/temp/angulartest/data/data.json'
            }).success(function(response) {
                var result = {
                    'success': true,
                    'data': response.data
                };
                console.debug(result, 'return this');
                deferred.resolve(result);
            }).error(function(data, status, headers, config) {
                logError("[apiService], getMunicipalityAsync() error, with status: " + status);
                deferred.reject();
            });
            return deferred.promise;
        }
    }
    return myService;
    });