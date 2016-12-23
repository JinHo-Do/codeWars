// https://www.codewars.com/kata/array-intersect-all/train/javascript
//
// Instructions
//
// Write a function intersect that takes any number of arguments. The function must return an array containing all the values that is present in every argument given to the function.
//
// All arguments given will be arrays.
// The first argument determines the order of the returned values.
// Return an empty array for empty result set.
// Example
//
// var a = ['dog', 'bar', 'foo'];
// var b = ['foo', 'bar', 'cat'];
// var c = ['gin', 'bar', 'foo'];
//
// intersect(a, b, c); // ['bar', 'foo']

var intersect = function () {
  let args = Array.prototype.slice.apply(arguments);
  let res = [];

  if (args.length === 0) return res;

  for (let i = 0; i < args[0].length; i++) {
    let isAll = args.every(v => v.indexOf(args[0][i]) > -1);

    if (isAll) {
      res.push(args[0][i]);
    }
  }

  return res;
};
