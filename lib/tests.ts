import { insertAt } from './insertAt';


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
else console.log('test 1 failed');


// Test 2: Make sure items will be inserted at specified index:
insertAt(2, [7, 8], arr);

if (arr[2] === 7 && arr[3] === 8) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure inserting is successful if specified index is negative:
insertAt(-1, [90], arr);
if (arr[arr.length - 2] === 90 && arr[arr.length - 1] === 4) console.log('test 3 passed');
else console.log('test 3 failed');


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
else console.log('test 4 failed');


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
else console.log('test 5 failed');


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
else console.log('test 6 failed');


// Test 7: Make sure array's length increases by length of new items after insert:
let length = arr.length;
insertAt(3, [], arr);
if (arr.length === length) console.log('test 7A passed');
else console.log('test 7A failed');

length = arr.length;
insertAt(3, [100], arr);
if (arr.length === (length + 1)) console.log('test 7B passed');
else console.log('test 7B failed');

length = arr.length;
insertAt(3, [100, 200, 300], arr);
if (arr.length === (length + 3)) console.log('test 7C passed');
else console.log('test 7C failed');