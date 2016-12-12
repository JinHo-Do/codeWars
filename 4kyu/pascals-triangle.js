// https://www.codewars.com/kata/pascals-triangle/train/javascript
//
// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
//
// Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.
//
// For example:
//
// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalsTriangle(n) {
  let arr = [[1], [1, 1]];

  for (let i = 2; i < n; i++) {
    let temp = [1];

    for (let j = 1; j < i; j++) {
      temp[j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }

    temp.push(1);
    arr.push(temp);
  }

  return n === 1 ? arr[0] : [].concat(...arr);
}
