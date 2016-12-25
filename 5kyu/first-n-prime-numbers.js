// https://www.codewars.com/kata/first-n-prime-numbers/train/javascript
//
// A prime number is an integer greater than 1 that is only evenly divisible by itself and 1.
//
// Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.
//
// For example:
//
// Primes.first(1)
// # => [2]
//
// Primes.first(2)
// # => [2, 3]
//
// Primes.first(5)
// # => [2, 3, 5, 7, 11]
//
// Primes.first(20).last(5)
// # => [53, 59, 61, 67, 71]
// Note: An inefficient algorithm will time out. Memoization may help.
//
// More info on primes here.

function Primes(){
  this.memo = {};

  this.first = function(n) {
    let arr = [], num = 2;

    while (arr.length !== n) {
      let isPrime = this.checkPrime(num);
      if (isPrime) arr.push(num);
      num++;
    }

    return arr;
  };

  this.checkPrime = function(n) {
    if (this.memo[n]) return this.memo[n];

    let prime = n !== 1;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        prime = false;
        break;
      }
    }

    return this.memo[n] = prime;
  };
};

var Primes = new Primes();
