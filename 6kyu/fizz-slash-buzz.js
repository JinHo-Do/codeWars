// https://www.codewars.com/kata/fizz-slash-buzz/train/javascript
//
// Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.
//
// For example, solution(20) should return [5, 2, 1]

function solution(number){
  let arr = new Array(3).fill(0);

  for (let i = 1; i < number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr[2]++;
    } else if (i % 5 === 0) {
      arr[1]++;
    } else if (i % 3 === 0) {
      arr[0]++;
    }
  }

  return arr;
}
