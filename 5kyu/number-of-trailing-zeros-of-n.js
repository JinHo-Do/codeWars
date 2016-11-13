// https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript
//
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
// N! = 1 * 2 * 3 * 4 ... N
//
// zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
// that has 2 trailing zeros 4790016(00)
// Be careful 1000! has length of 2568 digital numbers.

function zeros (n) {
  console.log(n);
  if (n === 0) {return 0;}

  if (n < 10) {
    return Math.floor(n / 5);
  } else if (n < 100) {
    return Math.floor(n / 5) + 1;
  } else if (n < 1000) {
    return Math.floor(n / 5) + 4;
  } else if (n < 10000) {
    return Math.floor(n / 5) + 49;
  } else if (n < 1000000) {
    return Math.floor(n / 5) + 4999;
  } else if (n < 10000000000) {
    return Math.floor(n / 5) + 49999998;
  }

}
