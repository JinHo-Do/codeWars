// https://www.codewars.com/kata/array-dot-isarray/train/javascript
//
// JavaScript 1.8.5 helpfully added the Array.isArray function, which can tell you whether its argument is an Array or not. Without it, checking whether something is an Array is rather tricky. How would you do it if you had to?

function isArray(arr) {
  if (typeof arr !== 'object') return false;
return arr === undefined ? false : JSON.stringify(arr)[0] === '[';
}
