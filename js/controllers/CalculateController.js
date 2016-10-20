(function () {
    'use strict';

    angular.module('App')
        .controller('CalculateController', CalculateController);

    CalculateController.$inject = ['$scope'];

    function CalculateController($scope) {
        var input = document.querySelector('input.input');

        $scope.input = '';
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
        };
        $scope.keyDown = function (e) {
            var startPosition = input.selectionStart;

            if (!(e.keyCode >= 112 && e.keyCode <= 123)) {//functional keys F1-F12
                e.preventDefault();

                if (e.key === '=' || e.key === 'Enter') {
                    $scope.calculate();
                } else if (e.key === '.' || e.key === ',') {
                    $scope.buttonClick('.');
                } else if (e.key === '*') {
                    $scope.buttonClick(' × ');
                } else if(e.key === '-' || e.key === '+' || e.key === '/') {
                    $scope.buttonClick(' ' + e.key + ' ');
                } else if (e.key === 'Backspace') {
                    $scope.remove();
                } else if (e.keyCode >= 48 && e.keyCode <= 57) {//numbers 0-9
                    $scope.buttonClick(e.key);
                } else if (e.keyCode === 37) {//move caret left
                    input.setSelectionRange(startPosition - 1, startPosition - 1);
                } else if (e.keyCode === 39) {//move caret right
                    input.setSelectionRange(startPosition + 1, startPosition + 1);
                }
            }
        };
    }
})();
