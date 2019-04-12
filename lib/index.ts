import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';


// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.

export function insertAt(index, values: any[], array): void {

	errorIfValuesAreNotArrays([values, array]);
	errorIfIndexNotValid(index, array.length);

	if (index < 0) {
		// If index is less than -1, it needs 1 added to it so values will be inserted at proper spot.
		if (index < -1) ++index;
		else return __ifNegativeOne_appendValues();
	}
	array.splice(index, 0, ...values);


	function __ifNegativeOne_appendValues(): void {
		array.push(...values);
		return;
	}

}
