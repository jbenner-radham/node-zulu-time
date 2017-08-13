'use strict';

module.exports = function leftPadNumber(string, number) {
    if (Number.isNaN(number)) {
        throw new TypeError('The passed argument is not a number.');
    }

    return (number < 10) ? `0${number}` : `${number}`;
};
