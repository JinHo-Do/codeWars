// https://www.codewars.com/kata/bit-calculator/train/javascript
//
// In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.
//
// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);
// parseInt and some Math functions are disabled.
//
// Those Math functions are enabled: pow,round,random

function calculate(num1,num2){
  let arr1 = num1.split('').reverse();
  let arr2 = num2.split('').reverse();
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '1') {
      sum += Math.pow(2, i);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '1') {
      sum += Math.pow(2, i);
    }
  }

  return sum;
}
