(function () {
    angular.module('anagramController',[])
        .controller('indexController', ['$scope', function ($scope) {
            $scope.message = "Hello";
        }]);
})();
