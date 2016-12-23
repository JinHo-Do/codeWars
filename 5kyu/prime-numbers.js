// https://www.codewars.com/kata/prime-numbers/train/javascript
//
// Preface
//
// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
// A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number
//
// The Problem
//
// You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)
//
// isPrime(number)
//
// Should return boolean true if prime, otherwise false
//
// getPrimes(start, finish)
//
// Should return a unique, sorted array of all primes in a given range (including the provided numbers, if they're prime). Note: start does not need to be the larger number.
//
// Sample Input:
//
// isPrime(number)
//
// isPrime(0); // === false
// isPrime(1); // === false
// isPrime(2); // === true
// isPrime(3); // === true
// isPrime(4); // === false
// isPrime(5); // === true
// getPrimes(start, finish)
//
// getPrimes(0, 0); // === []
// getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

let cache = {0: false, 1: false, 2: true, 3: true};

function isPrime(number) {
  if (cache[number] !== undefined) return cache[number];
  if (number < 0) return cache[number] = false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return cache[number] = false;
  }

  return cache[number] = true;
};

function getPrimes(start, finish) {
  let res = [], args = [...arguments].sort((a, b) => a- b);

  for (let i = args[0]; i <= args[1]; i++) {
    if (isPrime(i)) res.push(i);
  }

  return res;
};
