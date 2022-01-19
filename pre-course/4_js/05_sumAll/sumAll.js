// 3rd version 
const sumAll = function (num1, num2) {
    let a = num1;
    let b = num2;
    let finalSum = 0;
    let error = 'ERROR';

    while (a < 0 === true || b < 0 === true) {
        return error;
    }

    while (isNaN(a) === true || isNaN(b)) {
        return error;
    }

    while (isNaN(a) === false || isNaN(b) === false) {
        return error;
    }

    while (a < b) {
        for (i = a; i <= b; i++) {
            finalSum += i;
        }
        return finalSum;
    }

    while (a > b) {
        for (i = a; i >= b; i--) {
            finalSum += i;
        }
        return finalSum;
    };

};

// Do not edit below this line
module.exports = sumAll;
