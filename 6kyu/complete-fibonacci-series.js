// https://www.codewars.com/kata/complete-fibonacci-series/train/javascript
//
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array
//
// Example:
//
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []

function fibonacci(n) {
  let output = [];

  while (output.length < n) {
    if (output.length === 0) {
      output.push(0);
    } else if (output.length === 1) {
      output.push(1);
    } else {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}
