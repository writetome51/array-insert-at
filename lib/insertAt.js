"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.
function insertAt(index, values, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([values, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () {
        // If index is negative, it needs 1 added to it so values will be inserted at proper spot.
        if (index < 0) {
            if (index < -1)
                ++index;
            else { // else it's -1, so values need to be at the end.
                array.push.apply(// else it's -1, so values need to be at the end.
                array, values);
                return;
            }
        }
        array.splice.apply(array, [index, 0].concat(values));
    }, array);
}
exports.insertAt = insertAt;
