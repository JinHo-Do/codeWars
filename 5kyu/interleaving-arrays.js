// https://www.codewars.com/kata/interleaving-arrays/train/javascript
//
// Create a function named interleave, that accepts an arbitrary number of array arguments and returns a single array. The function should always return an array and the returned array should be generated by alternately appending elements from the passed in arrays. If one list is shorter than the others, the result should be null padded. No modifications should be made to the passed in arguments.
//
// Example:
//
// interleave([1, 2, 3], ['c', 'd', 'e']) // should return [1, 'c', 2, 'd', 3, 'e']
// interleave([1, 2, 3], [4, 5]) // should return [1,4,2,5,3,null]
// interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) // should return [1, 4, 7, 2, 5, 8, 3, 6, 9]
// interleave([]) // should return []

function interleave() {
  let arg = Array.prototype.slice.call(arguments, 0);
  let output = [];

  if (arg.every(v => v === null || v.length === 0)) return output;

  let maxLen = arg.reduce((pre, cur) => {
    if (cur.length > pre) pre = cur.length;
    return pre;
    }, 0) * arg.length;

  while (output.length !== maxLen) {

    for (let i = 0; i < arg.length; i++) {
      if (arg[i].length === 0) {
        output.push(null);
      } else {
        output.push(arg[i][0]);
        arg[i] = arg[i].slice(1);
      }
    }

  }

  return output;
}