// https://www.codewars.com/kata/trim-a-string/train/javascript
//
// Extend the String prototype by a trim function, that returns the string with leading or trailing whitespaces removed.
//
// Examples can be found in the test fixture.
//
// describe('trim the string', function() {
//   // better message for string comparison
//   var assertString = function(actual, expected, message) {
//     var errorMessage = 'Tested ' + message + ', expected ' + JSON.stringify(expected) + ', but got ' + JSON.stringify(actual);
//     Test.expect(expected === actual, errorMessage.replace(/ /g, '&nbsp;'));
//   };
//
//   it('should remove leading and trailing whitespaces', function() {
//     assertString("foo      ".trim(), "foo", "trailing spaces");
//     assertString("      foo".trim(), "foo", "leading spaces");
//     assertString("      foo      ".trim(), "foo", "leading and trailing spaces");
//     assertString("foo    bar".trim(), "foo    bar", "spaces in between");
//     assertString("    ".trim(), "", "only spaces");
//   });
// });

String.prototype.trim = function() {
  var arr = this.split('');

  if (arr[0] !== ' ' && arr[0] !== '\n' && arr[0] !== '\t' && arr[arr.length - 1] !== ' ' && arr[arr.length - 1] !== '\n' && arr[arr.length - 1] !== '\t') {
    return arr.join('');
  } else {
    for (var key in arr) {
      if (arr[key] === '\t' || arr[key] === '\n' || arr[key] === '\r' || arr[key] === '\n') {
        arr[key] = ' ';
      }
  }
  return arr.filter((a) => a !== ' ').join('');
  }
};
