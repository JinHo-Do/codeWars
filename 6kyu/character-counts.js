// https://www.codewars.com/kata/character-counts/train/javascript
//
// Character counts
//
// The object is to count the number of occurances of a specified character (or set of characters) in a string.
//
// Instructions
//
// Complete the placeholder function characterCount.
//
// it should return the number of times a single character appears in the string, or
// if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
// see the unit tests provided for a more comprehensive definition
// NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.

String.prototype.characterCount = function (charsToCount) {
  if (charsToCount === undefined) return charsToCount;

  let arr = this.split(''), res = [], obj = {};
  let chars = Array.isArray(charsToCount) ? charsToCount : charsToCount.split('');

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }

  chars.map(v => {
    if (obj[v]) {
      res.push(obj[v]);
    } else {
      res.push(0);
    }
  });

  return res.length === 1 ? res[0] : res;
};
