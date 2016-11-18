// https://www.codewars.com/kata/math-issues/train/javascript
//
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
//
// Here is a list of functions, we need:
//
// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
  if (number === 0) return 0;
  if (number % 1 === 0) return number;

  var arr = number.toString().split('.');
  arr[1][1] = '0';

  if (+arr[1][0] >= 5) return +arr[0] + 1;
  return +arr[0];
};

Math.ceil = function(number) {
  if (number === 0) return 0;
  if (number % 1 === 0) return number;

  var arr = number.toString(10).split('.');
  arr[1][1] = '0';
  return +arr[0] + 1;
};

Math.floor = function(number) {
  var arr = number.toString(10).split('.');

  return +arr[0];
};
