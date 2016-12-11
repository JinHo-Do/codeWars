// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript
//
// Given the string representations of two integers, return the string representation of the sum of those integers.
//
// For example:
//
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
  let args = Array.prototype.slice.apply(arguments).map(v => v.split('').reverse());
  let maxLen = Math.max(...args.map(v => v.length));
  let shorter = args[0].length >= args[1].length ? args[1] : args[0];
  let sum = new Array(maxLen).fill(0);

  for (let i = 0; i < maxLen; i++) {
    shorter[i] = shorter[i] || 0;
    sum[i] += +args[0][i] + +args[1][i];

    if (sum[i] >= 10) {
      sum[i + 1] = sum[i + 1] || 0;
      sum[i + 1] += Math.floor(sum[i] / 10);
      sum[i] = sum[i] % 10;
    } else if (i === maxLen - 1 && sum[i] === 0) {
      sum.pop();
    }

  }

  return sum.reverse().join('');
}
