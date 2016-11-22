// https://www.codewars.com/kata/large-factorials/train/javascript
//
// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//
// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.
//
// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None. In C++, return an empty string. For positive numbers a full length number is expected for example, return 25! = '15511210043330985984000000' as a String!
//
// Note: 0! is always equal to 1. Negative values should return null or an empty string(in C++).
//
// For more on Factorials : http://en.wikipedia.org/wiki/Factorial

function factorial(n){
  let sum = '1';

  for (let i = 1; i <= n; i++) {
    sum = sum.split('').reverse();
    let arrI = i.toString(10).split('').reverse();
    let tempSum = [];

    for (let j = 0; j < arrI.length; j++) {
      for (let k = 0; k < sum.length; k++) {
          if (tempSum[k + j] === undefined) tempSum[k + j] = 0;
          tempSum[k + j] += arrI[j] * sum[k];
      }

      for (let l = 0; l < tempSum.length; l++) {
        if (tempSum[l] > 9 && l !== tempSum.length - 1) {
          tempSum[l + 1] += Math.floor(tempSum[l] / 10), tempSum[l] = tempSum[l] % 10;
        }
      }

    }

    sum = tempSum.reverse().join('');
  }

  return sum;
}

module.exports = factorial;
