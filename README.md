To include in your project:

import {insertAt} from '@writetome51/array-insert-at';

insertAt(index, values: any[], array): void

Inserts values at specified index in the array.   Index can be negative or positive.   
It does not remove or replace any existing items in the array.  It only increases the length.   

Examples:

let arr = [1,2,3,4];   
insertAt(2, [7, 8], arr);  
--> [1,2,7,8,3,4]

let arr = [1,2,3,4];   
insertAt(-1, [7, 8], arr);  
--> [1,2,3,7,8,4]