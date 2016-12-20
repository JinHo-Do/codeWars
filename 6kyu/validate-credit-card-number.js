// https://www.codewars.com/kata/validate-credit-card-number/train/javascript
//
// In this Kata, you will implement The Luhn Algorithm, which is used to help validate credit card numbers.
//
// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
//
// Here is the algorithm:
//
// If there are an even number of digits, double every other digit starting with the first, and if there are an odd number of digits, double every other digit starting with the second. Another way to think about it is, from the right to left, double every other digit starting with the second to last digit.
//
// 1714 => [1*, 7, 1*, 4] => [2, 7, 2, 4]
//
// 12345 => [1, 2*, 3, 4*, 5] => [1, 4, 3, 8, 5]
//
// 891 => [8, 9*, 1] => [8, 18, 1]
// If a resulting doubled number is greater than 9, replace it with either the sum of it's own digits, or 9 subtracted from it.
//
//  [8, 18*, 1] => [8, (1+8), 1] => [8, 9, 1]
//
//  (or)
//
//  [8, 18*, 1] => [8, (18-9), 1] => [8, 9, 1]
// Sum all of the final digits
//  [8, 9, 1] => 8+9+1 => 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
//
//  18 (modulus) 10 => 8.
//
//  8 does not equal 0, so 891 is not a valid credit card number.

function validate(n){
  let arr = n.toString().split('').map(Number);

  if (arr.length % 2 === 0) {
    arr = arr.map((v, i) => {
      if (i % 2 === 0) {
        return v * 2 > 9 ? v * 2 - 9 : v * 2;
      } else {
        return v;
      }
    });
  } else {
    arr = arr.map((v, i) => {
      if (i % 2 === 1) {
        return v * 2 > 9 ? v * 2 - 9 : v * 2;
      } else {
        return v;
      }
    });
  }

  return arr.reduce((a, b) => a + b) % 10 === 0;
};
