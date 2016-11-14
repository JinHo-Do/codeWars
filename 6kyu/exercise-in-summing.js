// https://www.codewars.com/kata/exercise-in-summing/train/javascript

function minimumSum(values, n) {
  if (n === 0 || values.length === 0) return 0;
  var val = values.sort(function (a, b) {return a - b;}).slice(0, n);
  return val.reduce(function (a, b) {return a + b;});
}

function maximumSum(values, n) {
  if (n === 0 || values.length === 0) return 0;
  var val = values.sort(function (a, b) {return b - a;}).slice(0, n);
  return val.reduce(function (a, b) {return a + b;});
}