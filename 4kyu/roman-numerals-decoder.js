// https://www.codewars.com/kata/roman-numerals-decoder/train/javascript
//
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
// Example:
//
// solution('XXI'); // should return 21
// C# RomanDecode.Solution("XXI") -- should return 21
//
// Courtesy of rosettacode.org

function solution(roman){
  let obj = {
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
  let res = 0;

  for (let i = 0; i < roman.length; i++) {
    if (roman[i] + roman[i + 1] in obj) {
      res += obj[roman[i] + roman[i + 1]];
      i++;
    } else {
      res += obj[roman[i]];
    }
  }

  return res;
}
