// https://www.codewars.com/kata/irreducible-sum-of-rationals/train/javascript
//
// You will have a list of rationals in the form
//
// m = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ] or m = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
//
// where all numbers are positive integers. You have to produce the sum N/D of these rationals in an irreducible form ie N and D have only 1 for divisor.
//
// The result will be written in the form
//
// [N, D] in Ruby/Python/Clojure/JS/CS/PHP
// Just "N D" in Haskell or Some "N D" in F#
// "[N, D]" in Java, CSharp, TS
// {N, D} in C++
// {N, D} in Elixir
// Example:
//
// [ [1, 2], [1, 3], [1, 4] ] ---->
// [13, 12] or: Just "13 12" (Haskell) or: "[13, 12]" (Java, CSharp, TS) or: {13, 12} (C++, Elixir)
// Notes:
//
// If m is [] return
//
// nil/None/null (Ruby/Elixir/Clojure/Python/JS/CS/TS/Java/CSharp/PHP)
// Nothing (Haskell) None (F#)
// {0, 1} (C++)
// If D divise N return:
//
// N/D as an integer: n (Ruby/Elixir/Clojure/Python/JS/CS/PHP)
// Just "n" (Haskell), Some "n" (Haskell), "n" (Java, CSharp, TS), {n, 1} (C++).

function sumFracts(l) {

  function getGcb(a, b) {
    return b === 0 ? a : getGcb(b, a % b);
  }

  if (l.length === 0) {
    return null;
  }

  let lcm = 0;
  let gcb = 0;

  if (l.length === 2) {
    gcb = getGcb(l[0][1], l[1][1]);
    lcm = l[0][1] * l[1][1] / gcb;
  } else if (l.length === 3) {
    gcb = getGcb(l[0][1], l[1][1]);
    gcb = getGcb(gcb * l[0][1] * l[1][1], l[2][1]);
    lcm = l[0][1] * l[1][1] * l[2][1] / gcb;
  }

  let arr = [];
  let temp = 0;

  for (let i = 0; i < l.length; i++) {
      temp += lcm / l[i][1] * l[i][0];
  }

  arr[0] = temp, arr[1] = lcm;

  let arrGcb = getGcb(arr[0], arr[1]);

  if ( arrGcb !== 1) {
    arr[0] = arr[0] / arrGcb;
    arr[1] = arr[1] / arrGcb;
  }

  return arr[0] % arr[1] === 0 ? arr[0] / arr[1] : arr;
}
