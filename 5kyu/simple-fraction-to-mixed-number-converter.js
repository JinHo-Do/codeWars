// https://www.codewars.com/kata/simple-fraction-to-mixed-number-converter/train/javascript
//
// Task
//
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:
//
// a b/c
//
// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c.
//
// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.
//
// Division by zero should raise an error (preferably, the standard zero division error of your language).
//
// Examples
//
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
//
// Make sure not to modify the input of your function in-place, it is a bad practice.

function mixedFraction(s){
  let splitted = s.split('/').map(Number);
  let isMinus = false;
  let dad, mom, son, gcd;
  son = splitted[0], mom = splitted[1];

  if (splitted.every(v => v === 0) || splitted[1] === 0) throw 'Must raise ZeroDivisionError';
  if (son % mom === 0) return '' + son / mom;

  if (son * mom < 0) isMinus = true;

  dad = son * mom < 0 ? Math.abs(Math.ceil(son / mom)) : Math.abs(Math.floor(son / mom));
  gcd = Math.abs(getGcd(son, mom));
  son = (Math.abs(son) - dad * Math.abs(mom)) / gcd;
  mom = Math.abs(mom) / gcd;

  return dad === 0 ? (isMinus ? `-${son}/${mom}` : `${son}/${mom}`) : (isMinus ? `-${dad} ${son}/${mom}` : `${dad} ${son}/${mom}`);

  function getGcd(a, b) {
    return b === 0 ? a : getGcd(b, a % b);
  };

}
