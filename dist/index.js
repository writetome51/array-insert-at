"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.
function insertAt(index, values, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([values, array]);
    error_if_index_not_valid_1.errorIfIndexNotValid(index, array.length);
    if (index < 0) {
        // If index is less than -1, it needs 1 added to it so values will be inserted at proper spot.
        if (index < -1)
            ++index;
        else
            return __ifNegativeOne_appendValues();
    }
    array.splice.apply(array, [index, 0].concat(values));
    function __ifNegativeOne_appendValues() {
        array.push.apply(array, values);
        return;
    }
}
exports.insertAt = insertAt;
