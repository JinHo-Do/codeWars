// https://www.codewars.com/kata/nesting-structure-comparison/train/javascript
//
// Complete the method (or function in Python) to return true when its argument is an array that has the same nesting structure as the first array.
//
// For example:
//
//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
//
//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
//
// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
//
// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
// For your convenience, there is already a function 'isArray(o)' declared in the JS version that returns true if its argument is an array, false otherwise.

Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false;

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== typeof other[i]) {
      if (typeof this[i] !== 'object' && typeof other[i] !== 'object') {
        continue;
      } else {
        return false;
      }
    } else if (Array.isArray(this[i])) {
      return this[i].sameStructureAs(other[i]);
    }
  }

  return true;
};
