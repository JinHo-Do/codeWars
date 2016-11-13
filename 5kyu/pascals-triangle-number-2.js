// https://www.codewars.com/kata/pascals-triangle-number-2/train/javascript
//
// Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth
//
// The triangle should be returned as a nested array.
//
// for example:
//
// pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg
//
//           [1]
//         [1   1]
//        [1  2  1]
//       [1  3  3  1]
// here you get the 3 by adding the 2 and 1 above it.

function pascal(depth) {
  let arr = [];

  for (let i = 0; i < depth; i++) {
    let tempArr = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === depth - 1) {
        tempArr[j] = 1;
      } else {
        tempArr[j] = arr[i - 1].slice(j - 1, j + 1).reduce((a, b) => a + b);
      }
    }

    arr.push(tempArr);
  }

  return JSON.stringify(arr);
}
