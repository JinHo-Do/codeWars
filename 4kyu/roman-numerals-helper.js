// https://www.codewars.com/kata/roman-numerals-helper/train/javascript
//
// Create a RomanNumerals helper that can convert a roman numeral to and from an integer value. The class should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Examples:
//
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

function MakeRomanNumerals() {
  this.objRoman = {
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

  this.objNumber = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };

  this.toRoman = function(number) {
    let res = '';

    if (number / 1000 > 0) {
      res += this.objRoman[1000].repeat(number / 1000);
      number = number % 1000;
    }

    let hundred = Math.floor(number / 100) * 100;

    if (hundred >= 100) {
      if (this.objRoman[hundred]) {
        res += this.objRoman[hundred];
        number -= hundred;
      }
    }

    let ten = Math.floor(number / 10) * 10;

    if (ten >= 10) {
      if (this.objRoman[ten]) {
        res += this.objRoman[ten];
        number -= ten;
      }
    }

    if (this.objRoman[number]) {
      res += this.objRoman[number];
    } else if (number < 5) {
      res += 'I'.repeat(number);
    } else if (number < 9) {
      res += 'V' + 'I'.repeat(number - 5);
    }

    return res;
  };

  this.fromRoman = function(roman) {
    let res = 0;

    for (let i = 0; i < roman.length; i++) {
      if (roman[i] + roman[i + 1] in this.objNumber) {
        res += this.objNumber[roman[i] + roman[i + 1]];
        i++;
      } else {
        res += this.objNumber[roman[i]];
      }
    }

    return res;
  };

}

var RomanNumerals = new MakeRomanNumerals();
