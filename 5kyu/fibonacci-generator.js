// https://www.codewars.com/kata/fibonacci-generator/train/javascript
//
// Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).
//
// Example:
//
// var fib = genfib();
// fib(); // -> returns 0
// fib(); // -> returns 1
// fib(); // -> returns 1
// fib(); // -> returns 2

function genfib() {
  let arr = [];

  return function fib() {
    if (arr.length === 0) {
      arr.push(0);
    } else if (arr.length === 1) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }

    return arr[arr.length - 1];
  }
}
