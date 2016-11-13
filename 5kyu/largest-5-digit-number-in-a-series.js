// https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript
//
// In the following 6 digit number:
//
// 283910
// 91 is the greatest sequence of 2 digits.
//
// Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
//
// Adapted from ProjectEuler.net

function solution(digits){
  let arr = digits.split('');
  let maxNum = 9;
  let compare = 0;

  while(arr.indexOf(maxNum + '') !== -1) {
    let idx = arr.indexOf(maxNum + '');
    let temp = arr.splice(idx, 5).join('');

    if (compare < +temp) {compare = +temp;}
  }

  return compare;
}
