// https://www.codewars.com/kata/ready-for-prime-time/train/javascript
//
// We need prime numbers and we need them now!
//
// Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.
//
// For example:
//
// prime(11);
// Should return an array that looks like this:
//
// [2,3,5,7,11]

function prime(num) {
  let arr = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
}

function isPrime(num) {
  if (num === 2 || num === 3) {return true;}
  if (num <= 1 || num % 2 === 0 || num % 3 === 0) {return false;}

  let i = 5
  let w = 2

  while (i * i <= num) {
    if (num % i == 0) {
      return false
    }
    i += w
    w = 6 - w
  }

  return true;
}
