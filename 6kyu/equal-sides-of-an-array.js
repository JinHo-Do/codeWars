// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript

function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce(function (a, b) {return a + b}) === arr.slice(i + 1).reduce(function (a, b) {return a + b})) {
      return i;
    } 
  }
  
  return -1;
}