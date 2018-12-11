import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';
import { errorIfValuesAreNotArrays }  from 'error-if-values-are-not-arrays';


// index can be negative or positive.  If positive, existing items beginning at that index
// will be pushed to the right to make room.  If negative, existing items ending at that index 
// will be pushed to the left to make room.

export function insertAt(index, values: any[], array): void {
	errorIfValuesAreNotArrays([values, array]);
	ifIndexValid_getActionResult(
		index, 
		() => {
			// If index is negative, it needs 1 added to it so values will be inserted at proper spot.
			if (index < 0){
				if (index < -1) ++index;
				else { // else it's -1, so values need to be at the end.
					array.push(...values);
					return;
				}
			}
			array.splice(index, 0, ...values)
		},
		array
	);
}
