(function () {
    'use strict';

    angular.module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        var input = document.querySelector('input.input');
        $scope.input = '(123.17 + 13.301) × 10.131 - 4156 / 7';
        $scope.calculate = function () {
            $scope.result = calc($scope.input);
        };
        $scope.buttonClick = function (char) {
            var startPosition = input.selectionStart,
                endPosition = input.selectionEnd;

            $scope.input = $scope.input.slice(0, startPosition) + char + $scope.input.slice(endPosition);
            input.focus();
            setTimeout(function () {
                input.setSelectionRange(startPosition + char.length, startPosition + char.length);
            }, 1)
        };
        $scope.remove = function () {
            var startPosition = input.selectionStart,
                endPosition = input.selectionEnd;

            if (startPosition === endPosition && startPosition !== 0) {
                $scope.input = $scope.input.slice(0, startPosition - 1) + $scope.input.slice(endPosition);
                setTimeout(function () {
                    input.setSelectionRange(startPosition - 1, startPosition - 1);
                }, 1)
            } else {
                $scope.input = $scope.input.slice(0, startPosition) + $scope.input.slice(endPosition);
                setTimeout(function () {
                    input.setSelectionRange(startPosition, startPosition);
                }, 1)
            }
        };
        $scope.focus = function () {
            input.focus();
        };
        $scope.clearInput = function () {
            $scope.input = '';
            $scope.result = '';
        }
    }
})();
