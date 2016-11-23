// https://www.codewars.com/kata/roman-numerals-encoder/train/javascript
//
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Example:
//
// solution(1000); // should return 'M'
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.
//
// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number){
  let obj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let res = '';

  if (number / 1000 > 0) {
    res += obj[1000].repeat(number / 1000);
    number = number % 1000;
  }

  let hundred = Math.floor(number / 100) * 100;

  if (hundred >= 100) {
    if (obj[hundred]) {
      res += obj[hundred];
      number -= hundred;
    }
  }

  let ten = Math.floor(number / 10) * 10;

  if (ten >= 10) {
    if (obj[ten]) {
      res += obj[ten];
      number -= ten;
    }
  }

  if (obj[number]) {
    res += obj[number];
  } else if (number < 5) {
    res += 'I'.repeat(number);
  } else if (number < 9) {
    res += 'V' + 'I'.repeat(number - 5);
  }

  return res;
}
