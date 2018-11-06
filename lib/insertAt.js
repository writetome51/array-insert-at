"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// index can be negative or positive.
function insertAt(index, values, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([values, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice.apply(array, [index, 0].concat(values)); }, array);
}
exports.insertAt = insertAt;
