var calc = (function () {
    'use strict';

    function calc(str) {
        str = '(' + str + ')';
        var operands = [],
            functions = [],
            position = {value: 0},
            token,
            prevToken;

        do {
            token = getToken(str, position);
            if (prevToken === '(' && (token === '+' || token === '-')) {
                operands.push(0);
            }
            if (typeof token === 'number') {
                operands.push(token);
            } else if (token !== null) {
                if (token === ')') {
                    while (functions.length > 0 && functions[functions.length - 1] !== '(') {
                        popFunction(operands, functions);
                    }
                    functions.pop();
                } else {
                    while (canPop(token, functions)) {
                        popFunction(operands, functions);
                    }
                    functions.push(token);
                }
            }
            prevToken = token;
        } while (token !== null);

        if (operands.length > 1 && functions.length > 0) {
            throw new Error('Ошибка в разборе выражения');
        }

        return operands.pop();
    }

    function popFunction(operands, functions) {
        var b = parseFloat(operands.pop()),
            a = parseFloat(operands.pop()) || 0;

        switch (functions.pop()) {
            case '+': operands.push(a + b);
                break;
            case '-': operands.push(a - b);
                break;
            case '*': case '×': operands.push(a * b);
                break;
            case '/': operands.push(a / b);
                break;
        }
    }

    function canPop(operator, functions) {
        if (functions.length === 0) {
            return false;
        }
        var p1 = getPriority(operator),
            p2 = getPriority(functions[functions.length - 1]);

        return p1 >= 0 && p2 >= 0 && p1 >= p2;
    }

    function getPriority(operator) {
        switch (operator) {
            case ('('): return -1;
            case ('*'): case ('×'): case('/'): return 1;
            case ('+'): case('-'): return 2;
            default: throw new Error('Недопустимая операция ' + operator);
        }
    }

    function getToken(str, position) {
        readWhiteSpace(str, position);

        if (position.value === str.length) {
            return null;
        }
        if (isFinite(parseInt(str[position.value])) || str[position.value] === '.') {
            return readNumber(str, position);
        } else {
            return readFunction(str, position);
        }
    }

    function readNumber(str, position) {
        var res = '';
        while (position.value < str.length && (isFinite(parseInt(str[position.value])) || str[position.value] === '.')) {
            res += str[position.value++];
        }
        return parseFloat(res);
    }

    function readFunction(str, position) {
        return str[position.value++];
    }

    function readWhiteSpace(str, position) {
        while (position.value < str.length && str[position.value] === ' ') {
            position.value++;
        }
    }

    return calc;
})();