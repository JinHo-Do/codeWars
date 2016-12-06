// https://www.codewars.com/kata/rotate-an-array-matrix/train/javascript
//
// Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.
//
// The function accepts two parameters: an array, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".
//
// Here is an example of how your function will be used:
//
// var matrix = [[1, 2, 3],
//               [4, 5, 6],
//               [7, 8, 9]];
//
// rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]
// To help you visualize the rotated matrix, here it is formatted as a grid:
//
//  [[7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]]
// Rotated counter-clockwise it would looks like this:
//
//  [[3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]]
// The two-dimensional array that is passed to the function may have any number of elements ("rows"), each of which will contain an identical number of elements ("columns").

function rotate(matrix, direction) {
  let input = matrix.slice(0);
  let output = [];

  if (direction === 'clockwise') {

    if (matrix.length === 1) {
      for (let i = 0; i < matrix[0].length; i++) {
        output.push([matrix[0][i]]);
      }
      return output;
    }

    input = input.slice(0).reverse();
  } else {

    if (matrix.length === 1) {
      for (let i = matrix[0].length - 1; i >= 0; i--) {
        output.push([matrix[0][i]]);
      }
      return output;
    }

    input = input.slice(0).map(v => v.reverse());
  }

  for (let i = 0; i < input.length; i++) {
    let temp = [];

    for (let j = 0; j < input.length; j++) {
      if (input[j][i] !== undefined) {
        temp.push(input[j][i]);
      }
    }

    temp.length > 0 ? output.push(temp) : '';
  }

  if (direction === 'clockwise') {
    input = input.slice(0).reverse();
  } else {
    input = input.slice().map(v => v.reverse());
  }

  return output;
}
