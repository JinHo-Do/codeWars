// https://www.codewars.com/kata/interlace-an-arbitrary-number-of-strings/train/javascript
//
// Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).
//
// For example combineStrings('abc', '123') should return 'a1b2c3'.
//
// If the strings are different lengths the function should interlace them until each string runs out, continuing to add characters from the remaining strings.
//
// For example combineStrings('abcd', '123') should return 'a1b2c3d'.
//
// The function should take any number of arguments and combine them.
//
// For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.
//
// Note: if only one argument is passed return only that string. If no arguments are passed return an empty string.

function combineStrings() {
  let arg = Array.prototype.slice.apply(arguments, [0]);
  let outLen = arg.map(v => v.length).reduce((a, b) => a + b, 0);
  let str = '';

  while (str.length !== outLen) {

    for (let i = 0; i < arg.length; i++) {
      str += arg[i][0];
      arg[i] = arg[i].replace(arg[i][0], '');

      if (arg[i] === '') {
        arg.splice(i, 1);
        i--;
      }

    }

  }

  return str;
}
