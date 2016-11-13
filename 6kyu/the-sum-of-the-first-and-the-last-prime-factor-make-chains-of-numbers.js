// https://www.codewars.com/kata/the-sum-of-the-first-and-the-last-prime-factor-make-chains-of-numbers/train/javascript
//
// Every positive integer number, that is not prime, may be decomposed in prime factors. For example the prime factors of 20, are:
//
// 2, 2, and 5, because: 20 = 2 . 2 . 5
// The first prime factor (the smallest one) of 20 is 2 and the last one (the largest one) is 5. The sum of the first and the last prime factors, sflpf of 20 is: sflpf = 2 + 5 = 7
//
// The number 998is the only integer in the range [4, 1000] that has a value of 501 , so its sflpf equals to 501, but in the range [4, 5000] we will have more integers with sflpf = 501 and are: 998, 1996, 2994, 3992, 4990.
//
// We need a function sflpf_data() (javascript: sflpfData()that receives two arguments, val as the value of sflpf and nMax as a limit, and the function will output a sorted list of the numbers between 4 to nMax(included) that have the same value of sflpf equals to val.
//
// Let's see some cases:
//
// (Advice:Try to discard primes in a fast way to have a more agile code)
//
// Enjoy it!

function sflpfData(k, nMax){
  let outArr = [];

  for (let i = k; i < nMax; i++) {

    let num = i;
    let arr = [];

    for (let j = 2; j <= k - j; j++) {
      if (isPrime(j) && num % j === 0) {
        arr.push(j);
        break;
      }
    }

    num = num / arr[0];

    if (isPrime(num) && arr[0] + num === k) {
      outArr.push(i);
    } else {
      while (!isPrime(num)) {

        for (let j = 2; j <= k; j++) {
          if (isPrime(j) && num % j === 0) {
            num = num / j;
            break;
          }
        }

      }

      if (arr[0] + num === k) {
        outArr.push(i);
      }

    }

  }

  return outArr;

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
}
