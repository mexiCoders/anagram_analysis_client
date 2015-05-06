(function () {
    angular.module('anagramController',[])
        .controller('indexController', ['$scope', '$http', function ($scope, $http) {

            $scope.isAnagram = function () {
                var word1 = $scope.word1,
                word2 = $scope.word2;

                var apiUrl = 'http://localhost:8080/anagramfinder?firstword='+word1+'&secondword='+word2;
                console.log(apiUrl);
                $http({
                    method: 'POST',
                    url: apiUrl
                }).success(function (data) {
                    $scope.anagram = data;
                }).error( function () {
                    $scope.errorMessage = 'Error trying to reach server';
                });
            };
        }]);
})();
