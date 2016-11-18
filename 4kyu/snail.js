// https://www.codewars.com/kata/snail/train/javascript
//
// Snail Sort
//
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
//
//
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

var snail = function(array) {
  if (array.length === 1) return array[0];

  let arr = [];

  while(array.length) {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        arr = arr.concat(array[i]);
      } else if (i > 0 && i < array.length - 1) {
        arr = arr.concat(array[i].splice(array[i].length - 1, 1));
      } else if (i === array.length - 1) {
        arr = arr.concat(array[i].reverse());
        array.splice(0, 1);
        array.splice(array.length - 1, 1);
      }
    }

    if (array.length === 1) {
      arr = arr.concat(array[0].splice(0));
      array.splice(0);
    } else {
      for (let i = array.length - 1; i >= 0; i--) {
        arr = arr.concat(array[i][0]);
        array[i].splice(0, 1);
      }
    }

  }

  return arr;
};
