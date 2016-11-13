// https://www.codewars.com/kata/odd-slash-even-number-of-divisors/train/javascript

function oddity(n){
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 'odd' : 'even';
}
