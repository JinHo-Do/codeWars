// https://www.codewars.com/kata/lazy-repeater/train/javascript
//
// The makeLooper() function takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.
//
// For example:
//
// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call

function makeLooper(str) {
  let i = 0, len = str.length;

  return function() {
    let res = str[i % len];
    i++;

    return res;
  }
}

// function makeLooper(str) {
//
//   return function fn() {
//     let globe = str;
//
//     if (fn.cache === undefined) {
//       fn.cache = 0;
//     }
//
//     let idx = fn.cache;
//
//     if (fn.cache === globe.length) {
//       fn.cache = 0, idx = 0;
//     }
//
//     fn.cache++;
//
//     return globe[idx];
//   }
//
// }
