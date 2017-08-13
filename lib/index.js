'use strict';

const leftPadNumber = require('./left-pad-number');

module.exports = function zuluTime(date = new Date()) {
    const year = date.getUTCFullYear();
    const month = leftPadNumber`${(date.getUTCMonth() + 1)}`;
    const day = leftPadNumber`${date.getUTCDate()}`;
    const hours = leftPadNumber`${date.getUTCHours()}`;
    const minutes = leftPadNumber`${date.getUTCMinutes()}`;
    const seconds = leftPadNumber`${date.getUTCSeconds()}`;

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};
