import { insertAt } from './index';


let arr = [1, 2, 3, 4];


// Test 1: make sure anything other than integer as first argument will trigger error:
let errorsTriggered = 0;
try {
	insertAt(Infinity, [], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1.1, [], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt('1', [], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(NaN, [], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(true, [], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt({}, [10], arr);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 6) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: Make sure items will be inserted at specified index:
insertAt(2, [7, 8], arr);

if (arr[2] === 7 && arr[3] === 8) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2A: Make sure index 0 places new items at beginning:
arr = [1, 2, 3, 4];
insertAt(0, [7, 8], arr);

if (arr.length === 6 && arr[0] === 7 && arr[1] === 8) console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 3: Make sure inserting is successful if specified index is negative:
arr = [1, 2, 3, 4];
insertAt(-1, [90, 91], arr);
if (arr[arr.length - 1] === 91 && arr[arr.length - 2] === 90 && arr[arr.length - 3] === 4)
	console.log('test 3 passed');
else console.log('test 3 FAILED');

// Test 3A: if negative index suggests new values should be placed at beginning,
// make sure existing item gets pushed to left:
arr = [1, 2, 3, 4];
insertAt(-4, [90, 91], arr);
if (arr.length === 6 && arr[0] === 1 && arr[1] === 90 && arr[2] === 91) console.log('test 3A passed');
else console.log('test 3A FAILED');


// Test 4: Make sure error is triggered if specified index doesn't exist:
errorsTriggered = 0;
let currentLength = arr.length;
try {
	insertAt(-currentLength - 1, [99], arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(currentLength, [99], arr);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 2) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Error must be triggered if anything other than array is passed as second
// argument:
errorsTriggered = 0;
try {
	insertAt(1, 'hello', arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, '', arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, {}, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, true, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, 1, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, () => 1, arr);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 6) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Error must be triggered if anything other than array is passed as third
// argument:
errorsTriggered = 0;
try {
	insertAt(1, [1], 'hello');
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, [1], '');
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, [1], {});
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, [1], true);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, [1], 1);
}
catch (e) {
	++errorsTriggered;
}
try {
	insertAt(1, [1], () => 1);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 6) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure array's length increases by length of new items after insert:
let length = arr.length;
insertAt(3, [], arr);
if (arr.length === length) console.log('test 7A passed');
else console.log('test 7A FAILED');

length = arr.length;
insertAt(3, [100], arr);
if (arr.length === (length + 1)) console.log('test 7B passed');
else console.log('test 7B FAILED');

length = arr.length;
insertAt(3, [100, 200, 300], arr);
if (arr.length === (length + 3)) console.log('test 7C passed');
else console.log('test 7C FAILED');