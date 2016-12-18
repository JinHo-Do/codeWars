// https://www.codewars.com/kata/matrix-addition/train/javascript
//
// Write a function that accepts two square matrices (nxn two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size nxn (square), containing only integers.
//
// How to sum two matrices:
// Take each cell [n][m] from the first matrix, and add it with the [n][m] cell from the second matrix. This will be cell [n][m] in the solution matrix.
//
// Visualization:
// |1 2 3|
// |3 2 1|
// |1 1 1|
// +
// |2 2 1|
// |3 2 3|
// |1 1 3|
// =
// |3 4 4|
// |6 4 4|
// |2 2 4|
//
// Example function call:
// matrixAddition( [ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] );
// returns [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]

function matrixAddition(a, b){
  let res = [];

  for (let i = 0; i < a.length; i++) {
    let temp = [];

    for (let j = 0; j < a[i].length; j++) {
      temp.push(a[i][j] + b[i][j]);
    }

    res.push(temp);
  }

  return res;
}
