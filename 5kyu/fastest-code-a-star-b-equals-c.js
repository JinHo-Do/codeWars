// https://www.codewars.com/kata/fastest-code-a-star-b-equals-c/javascript
//
// This is the Performance version of coding 3min series. If your code runs more than 6000ms, please optimize your code or try the simple version
//
// Task:
//
// Give you a number array numbers and a number c.
//
// Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]
//
// The array numbers is a sorted array, value range: -1000...1000
//
// The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
//
// Please see more example at testcases.

function findAB(numbers,c){
  let obj = {};
  let arr = [];
  let min = 0;

  if (c === 0) {
    return [numbers[0], c];
  }

  for (let i = 0; i < numbers.length; i++) {
    if (c % numbers[i] === 0 && obj[numbers[i]] === undefined) {
      obj[c / numbers[i]] = numbers[i];
    } else if (obj[numbers[i]] !== undefined && numbers[i] !== numbers[i + 1]) {
      arr.push(+obj[numbers[i]], numbers[i]);
    }
  }

  min = Math.min(...arr);
  return arr.length === 0 ? null : [min, c / min];
}
