// https://www.codewars.com/kata/a-small-difference/train/javascript
//
// Write a function that given two strings determines if they differ by exactly one character.
//
// The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.
//
// Examples:
//
// tower / towe -> true
// tower / towner -> true
// tower / bower -> true
// tower / token -> false
// tower / tower -> false

function oneCharDifference(s1, s2) {
  let longer, shorter, count;
  count = 0;

  if (s1.length >= s2.length) longer = s1, shorter = s2;
  else longer = s2, shorter = s1;

  for (let i = 0; i < longer.length; i++) {
    if (count > 1) return false;
    if (longer[i] !== shorter[i]) {
      count++;
      if (s1.length === s2.length) {
        continue;
      } else {
        longer = longer.slice(i + 1), shorter = shorter.slice(i), i = -1;
      }
    }
  }

  return count === 1;
};
