import {appendMany} from '@writetome51/array-append-prepend-many';
import {errorIfIndexNotValid} from 'error-if-index-not-valid';


// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.

export const insertAt = (index, values, array) => {
	errorIfIndexNotValid(index, array.length);

	if (index < 0) {
		if (index < -1) ++index; // so values will be inserted at proper spot.
		else return appendMany(values, array);
	}
	array.splice(index, 0, ...values);
};
