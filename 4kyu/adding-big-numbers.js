// https://www.codewars.com/kata/adding-big-numbers/train/javascript
//
// We need to sum big numbers and we require your help.
//
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
//
// Example
//
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes
//
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  var a = a.split('').reverse();
  var b = b.split('').reverse();
  var maxLen = Math.max(a.length, b.length);
  var arr = new Array(maxLen).fill(0);

  for (var i = 0; i < arr.length; i++) {
    a[i] === undefined ? a[i] = 0 : a[i] = a[i];
    b[i] === undefined ? b[i] = 0 : b[i] = b[i];
    arr[i] = +a[i] + +b[i];
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 9) {
      arr[i + 1] = arr[i + 1] ? arr[i + 1] += 1 : 1;
      arr[i] = arr[i] % 10;
    } else {
      arr[i] = arr[i];
    }
  }

  return arr.reverse().join('');
}
