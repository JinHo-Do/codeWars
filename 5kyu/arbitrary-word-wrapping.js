// https://www.codewars.com/kata/arbitrary-word-wrapping/train/javascript
//
// You are writing an app that displays a fixed width font and has a strict limit of 25 characters per line in one particular text area.
//
// Write a function that takes in a string, inserts newline characters, and adds a hyphen on the end of a line if a word is continued on the next line.
//
// White space should be left in the result string as is.
//
// Test Fixture Cut-n-Paste:
//
// var input = "The quick brown fox jumped over the lazy developer.";
// var expectedResult ="The quick brown fox jump-\ned over the lazy develop-\ner.";
// var result = wordWrap(input);
// Test.expect(result === expectedResult);

var wordWrap = function (str) {
  let out = '';

  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i % 24 === 0 && str[i + 1] !== ' ') {
      out += '-\n' + str[i];
    } else if (i !== 0 && i % 24 === 0 && str[i + 1] === ' ') {
      out += str[i] + '\n';
    } else {
      out += str[i];
    }
  }

  return out;
};
