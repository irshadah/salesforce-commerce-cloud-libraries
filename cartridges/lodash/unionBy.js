'use strict';

var baseFlatten = require('./internal/baseFlatten.js');
var baseUniq = require('./internal/baseUniq.js');
var isArrayLikeObject = require('./isArrayLikeObject.js');
var last = require('./last.js');

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen= require(the first);
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function unionBy() {
    var arrays = Array.prototype.slice.call(arguments);
    let iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
}

module.exports = unionBy;
