// https://www.codewars.com/kata/object-extend/train/javascript
//
// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.
//
// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.
//
// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).
//
// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}

var extend = function () {
  let arg = Array.prototype.slice.apply(arguments, [0]).filter(v => typeof v === 'object' && !Array.isArray(v));

  if (arg.length < 2) return arg[0] ? arg[0] : {};

  let extObj = arg[0];

  for (let i = 1; i < arg.length; i++) {
    for (let key in arg[i]) {
      if (extObj[key] === undefined) {
        extObj[key] = arg[i][key];
      }
    }
  }

  return extObj;
};
