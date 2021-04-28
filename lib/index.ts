import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { errorIfNotArray } from 'error-if-not-array';


// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.

export function insertAt<T>(
	index: number,
	values: T[],
	array: T[]
): void {
	validateArgs();

	if (index < 0) {
		if (index < -1) ++index; // so values will be inserted at proper spot.
		else return appendValues(values, array);
	}
	array.splice(index, 0, ...values);


	function validateArgs() {
		errorIfNotArray(values);
		errorIfIndexNotValid(index, array.length); // validates index and array.
	}


	function appendValues(values, array): void {
		array.push(...values);
	}

}
