// https://www.codewars.com/kata/pipelining-and-composing-functions/train/javascript
//
// Let's see 2 ways of applying successive functions to an object:
//
// The purpose of this kata is to think of this kind of code
//
// var result = fn4(fn3(fn2(fn1(obj))));
// in terms of pipelining or composition of functions.
//
// 1) Pipelining
//
// var result = pipeline(obj
//                          , fn1
//                          , fn2
//                          , fn3
//                          , fn4);
// for instance:
//
// pipeline([1,2,3,4,5,6] // seed
//     , rest // first function to apply
//     , rest // second function to apply
//     , rest // ..
//     , rest
//     , first);
// => 5
// 2) Composition: it should return a function that is the composition of a list of functions, where each function consumes the return value of the function that follows.
//
// var compositionFn = compose(fn4, fn3, fn2, fn1);
// var result = compositionFn(obj);
// for instance
//
// var greet    = function(name){ return "hi: " + name; };
// var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
// var welcome = compose(greet, exclaim);
// welcome('moe');
// => 'hi: MOE!'

function pipeline(seed /*, args */) {
  if (arguments.length === 0) return undefined;

  let fn = [...arguments], result = fn.shift();

  if (fn.length === 0) {
    return result;
  } else {
    while (fn.length !== 0) {
      result = fn[0].call(this, result);
      fn.shift();
    }
  }

  return result;
};

function compose() {
  let fns = [...arguments].reverse(), lastFn = fns.pop(), result;

  return function(arg) {
    while (fns.length !== 0) {
      if (result === undefined) {
        result = typeof arg[0] === 'object' ? [...arg] : arg;
      }
      result = fns[0].call(this, result);
      fns.shift();
    }

    return lastFn.call(this, result);
  }
};
