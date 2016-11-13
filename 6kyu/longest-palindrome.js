// https://www.codewars.com/kata/longest-palindrome/train/javascript
//
// Longest Palindrome
//
// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, return value must be 0.
//
// Example:
//
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

longestPalindrome = function(s){ 
  if (s.length === 0) {return 0;}

  s = s.split('');
  var len = 1;

  for (var i = 0; i < s.length - 1; i++) {
    for (var j = i + 1; j < s.length; j++) {
      if (s.slice(i, j + 1).join('') === s.slice(i, j + 1).reverse().join('')) {
        if (s.slice(i, j + 1).length > len) {
          len = s.slice(i, j + 1).length;
        }
      }
    }
  }

  return len;
}
