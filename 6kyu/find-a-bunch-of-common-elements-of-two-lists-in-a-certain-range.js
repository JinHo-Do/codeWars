// https://www.codewars.com/kata/find-a-bunch-of-common-elements-of-two-lists-in-a-certain-range/train/javascript
//
// We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:
//
// they are present in both ones
// they occur more than once in A and more than once in B
// their values are within a given range
// thay are odd or even according as it is requested
// arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
// arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
// rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
// wanted = 'odd'
// Process to obtain the result:
//
// 0, 1, 2, 3, 7, are the numbers present in arrA and arrB
// 1, 2, 3, 7,  occur twice or more in arrA and arrB
// 1, 2, 3,  are in the range [-4, 4]
// 1, 3, are odd
// output: [1, 3]
// For the case:
//
// arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
// arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
// rng = [-4, 4]
// wanted = 'even'
// output[0, 2, 4]
// If there are no elements to fulfill the constraints given above the result will be the empty array.
//
// The name of the function with the corresponding order of its arguments and the data structure for the output is as it follows below:
//
// find_arr(arrA, arrB, rng, wanted) ----> []
// (For Javascript the function will be findArr()) Features of the tests:
//
// Number of Random Tests = 300
// Length of the arrays A and B between 1000 and 10000
// You may assume that you will always receive valid entries for all the tests. Enjoy it!! Very Important: For javascript run the tests only in Node v6.6.0 and Node v6.6.0/Babel.

function findArr(arrA, arrB, rng, wanted) {
  let objA, objB, outArr;
  objA = {}, objB = {}, outArr = [];

  if (wanted === 'odd') {
    for (let i = 0; i < arrA.length; i++) {
      if (Math.abs(arrA[i]) % 2 === 1 && arrA[i] >= rng[0] && arrA[i] <= rng[1]) {
        objA[arrA[i]] === undefined ? objA[arrA[i]] = 1 : objA[arrA[i]]++;
      }
    }
    for (let i = 0; i < arrB.length; i++) {
      if (Math.abs(arrB[i]) % 2 === 1 && arrB[i] >= rng[0] && arrB[i] <= rng[1]) {
        objB[arrB[i]] === undefined ? objB[arrB[i]] = 1 : objB[arrB[i]]++;
      }
    }
  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (Math.abs(arrA[i]) % 2 === 0 && arrA[i] >= rng[0] && arrA[i] <= rng[1]) {
        objA[arrA[i]] === undefined ? objA[arrA[i]] = 1 : objA[arrA[i]]++;
      }
    }
    for (let i = 0; i < arrB.length; i++) {
      if (Math.abs(arrB[i]) % 2 === 0 && arrB[i] >= rng[0] && arrB[i] <= rng[1]) {
        objB[arrB[i]] === undefined ? objB[arrB[i]] = 1 : objB[arrB[i]]++;
      }
    }
  }

  for (let key in objA) {
    if (key in objB && objA[key] > 1 && objB[key] > 1) {
      outArr.push(+key);
    }
  }

  return outArr.sort((a, b) => a - b);
}

module.exports = findArr;
