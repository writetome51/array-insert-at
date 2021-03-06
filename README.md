# insertAt\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: T[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): void

At `index`, `values` are inserted in `array`.   
`index` can be negative or positive.  If positive, existing items beginning at that index   
will be pushed to the right to make room.  If negative, existing items ending at that  
index will be pushed to the left to make room.  No items get removed.

## Examples
```js
let arr = [1,2,3,4];   
insertAt(2, [7, 8], arr);  
// arr is now [1,2,7,8,3,4]

let arr = [1,2,3,4];   
insertAt(-1, [7, 8], arr);  
// arr is now [1,2,3,4,7,8]

let arr = [1,2,3,4];   
insertAt(-4, [7, 8], arr);  
// arr is now [1,7,8,2,3,4]
```

## Installation
`npm i @writetome51/array-insert-at`


## Loading
```js
import { insertAt } from '@writetome51/array-insert-at';
```
