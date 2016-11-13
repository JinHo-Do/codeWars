// https://www.codewars.com/kata/steps-in-primes/train/javascript

function step(g, m, n) {

  function isPrime(num) {
    for(var i = 2; i < num; i++) {
      if(num % i === 0 ) {
        return false;
      }
    }
    return true;
  }

  for (var i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }

  return null;
}
