// https://www.codewars.com/kata/is-integer-array/train/javascript
//
// Write a function isIntArray with the below signature.
//
// function isIntArray(arr) {
//     return true;
// }
// returns true if every element in an array is an integer.
// returns true if array is empty.
// returns false for every other input.

function isIntArray(arr) {
  return arr === undefined || arr === null || !Array.isArray(arr) ?
    false : arr.every(v => typeof v === 'number' && !isNaN(v) && v % 1 === 0);
};
