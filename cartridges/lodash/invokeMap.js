'use strict';
var apply = require('./internal/apply');
var baseEach = require('./internal/baseEach');
var baseInvoke = require('./internal/baseInvoke');
var baseRest = require('./internal/baseRest');
var isArrayLike = require('./isArrayLike');

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {...*} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * _.invokeMap([123, 456], String.prototype.split, '');
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
var invokeMap = baseRest(function (collection, path, args) {
    var index = -1;
    var isFunc = typeof path == 'function';
    var result = isArrayLike(collection) ? Array(collection.length) : [];

    baseEach(collection, function (value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
    });
    return result;
});

module.exports = invokeMap;
