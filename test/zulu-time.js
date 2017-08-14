'use strict';

const assert = require('assert');
const zuluTime = require('../');

describe('zulu-time', function () {
    it('is a function', function () {
        assert(typeof zuluTime === 'function');
    });

    it('returns a timestamp', function () {
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

        assert(regex.test(zuluTime()));
    });

    it('returns a string', function () {
        assert(typeof zuluTime() === 'string');
    });
});
