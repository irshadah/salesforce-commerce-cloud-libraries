'use strict';

var createMathOperation = require('./internal/createMathOperation.js');

/**
 * Subtract two numbers.
 *
 * @since 4.0.0
 * @category Math
 * @param {number} minuend The first number in a subtraction.
 * @param {number} subtrahend The second number in a subtraction.
 * @returns {number} Returns the difference.
 * @example
 *
 * subtract(6, 4) => 2
 */
const subtract = createMathOperation(function (minuend, subtrahend) { return minuend - subtrahend; }, 0);

module.exports = subtract;
