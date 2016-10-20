(function () {
    'use strict';

    angular.module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        $scope.input = '';
        $scope.calculate = function () {
            $scope.result = calc($scope.input);
        };
        $scope.buttonClick = function (char) {
            $scope.input += char;
        };
        $scope.removeLast = function () {
            $scope.input = $scope.input.slice(0, -1);
        }
    }
})();
