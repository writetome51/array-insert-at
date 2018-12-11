To include in your project:

import {insertAt} from '@writetome51/array-insert-at';

insertAt(index, values: any[], array): void

Inserts values at specified index in the array.   Index can be negative or positive.  
If positive, existing items beginning at that index will be pushed to the right to   
make room.  If negative, existing items ending at that index will be pushed to the   
left to make room.  Either way, once the operation is done the new values will occupy  
that specified index. 

Examples:

let arr = [1,2,3,4];   
insertAt(2, [7, 8], arr);  
--> [1,2,7,8,3,4]

let arr = [1,2,3,4];   
insertAt(-1, [7, 8], arr);  
--> [1,2,3,4,7,8]

let arr = [1,2,3,4];   
insertAt(-4, [7, 8], arr);  
--> [1,7,8,2,3,4]