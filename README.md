# insertAt()

## insertAt(index, values: any[], array): void

Inserts <b>values</b> at <b>index</b> in <b>array</b>.   
<b>index</b> can be negative or positive.  If positive, existing items beginning at that index   
will be pushed to the right to make room.  If negative, existing items ending at that  
index will be pushed to the left to make room.  No items get removed.

## Examples
```
let arr = [1,2,3,4];   
insertAt(2, [7, 8], arr);  
--> [1,2,7,8,3,4]

let arr = [1,2,3,4];   
insertAt(-1, [7, 8], arr);  
--> [1,2,3,4,7,8]

let arr = [1,2,3,4];   
insertAt(-4, [7, 8], arr);  
--> [1,7,8,2,3,4]
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/array-insert-at
```

## Loading
```
// If using TypeScript:
import { insertAt } from '@writetome51/array-insert-at';
// If using ES5 JavaScript:
var insertAt = require('@writetome51/array-insert-at').insertAt;
```
