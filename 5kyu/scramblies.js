// https://www.codewars.com/kata/scramblies/train/javascript
//
// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
  let obj = {};

  str1.split('').map(function(v) {
    if (v in obj) {
      obj[v]++;
    } else {
      obj[v] = 1;
    }
  });

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]] > 0) {
      obj[str2[i]]--;
    } else {
      return false;
    }
  }

  return true;
}
