// https://www.codewars.com/kata/calculating-with-functions/train/javascript
//
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

function zero() {
  if (arguments.length > 0) {
    var arg = 0;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 0;
  }
}
function one() {
  if (arguments.length > 0) {
    var arg = 1;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 1;
  }
}
function two() {
  if (arguments.length > 0) {
    var arg = 2;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 2;
  }
}
function three() {
  if (arguments.length > 0) {
    var arg = 3;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 3;
  }
}
function four() {
  if (arguments.length > 0) {
    var arg = 4;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 4;
  }
}
function five() {
  if (arguments.length > 0) {
    var arg = 5;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 5;
  }
}
function six() {
  if (arguments.length > 0) {
    var arg = 6;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 6;
  }
}
function seven() {
  if (arguments.length > 0) {
    var arg = 7;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 7;
  }
}
function eight() {
  if (arguments.length > 0) {
    var arg = 8;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 8;
  }
}
function nine() {
  if (arguments.length > 0) {
    var arg = 9;
    var func = Array.prototype.slice.call(arguments, 0, 1)[0];
    return func.call(this, arg);
  } else {
    return 9;
  }
}

function plus() {
  var x = Array.prototype.slice.call(arguments, 0, 1);
  return function (y) {
    return +y + +x;
  }
}
function minus() {
  var x = Array.prototype.slice.call(arguments, 0, 1);
  return function (y) {
    return +y - +x;
  }
}
function times() {
  var x = Array.prototype.slice.call(arguments, 0, 1);
  return function (y) {
    return +y * +x;
  }
}
function dividedBy() {
  var x = Array.prototype.slice.call(arguments, 0, 1);
  return function (y) {
    return +y / +x;
  }
}
