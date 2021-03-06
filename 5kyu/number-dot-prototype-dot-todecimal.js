// https://www.codewars.com/kata/number-dot-prototype-dot-todecimal/train/javascript
//
// Numbers in JavaScript can be turned into strings. For example, (123.456).toString() gives you the string "123.456". But sometimes, numbers are so large or so small that the string returned is in a strange format called "scientific notation".
//
// Here are some examples of scientific notation, as seen in JavaScript:
//
// 100 == 1e+2
// 0.01 == 1e-2
// 12.34 == 1.234e+1
// 0.000456 == 4.56e-4
// The basic idea is that the "coefficient", to the left of "e" has its decimal place moved a number of places equal to the "exponent", to the right of "e". So:
//
// 4.56e-4
// =======
//     4.56
//      ^
//  v moved left 4
// 0.000456
//
// 1.234e+1
// ========
// 1.234
//  ^
//   v moved right 1
// 12.34
// That's all there is to it, really. But the problem is, JavaScript loves this scientific notation, even to the point that it can use it even when the number is in a manageable size. And there is no way of getting the original, full number as a string with any native method. And your job is to write one.
//
// Write a method that can be called on any number that returns the number in all it's full, long-winded, memory-intensive string glory. ^^

Number.prototype.toDecimal = function() {
  let target = this.toString(10);
  
  if (target.indexOf('e') > -1) {
    let arr = target.split('e');
    let str = '';

      if (+arr[0] % 1 === 0 && +arr[1] < 0) {
        str += '0.' + '0'.repeat(Math.abs(arr[1]) - arr[0].length) + arr[0];
      } else if (+arr[1] < 0) {
        let dotIdx = arr[0].indexOf('.');
        arr[0] = arr[0].split('.').join('');
        str += '0.' + '0'.repeat(Math.abs(arr[1]) - dotIdx) + arr[0];
      } else if (+arr[0] % 1 === 0 && +arr[1] > 0) {
        str += arr[0] + '0'.repeat(Math.abs(arr[1]));
      } else if (+arr[1] > 0) {
        let dotIdx = arr[0].length - arr[0].indexOf('.') - 1;
        arr[0] = arr[0].split('.').join('');
        str += arr[0] + '0'.repeat(Math.abs(arr[1]) - dotIdx);
      }

      return str;
  }


  return target;
};
