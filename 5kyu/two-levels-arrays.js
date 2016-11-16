// https://www.codewars.com/kata/two-levels-arrays/train/javascript
//
// You have to write an algorithm that flatten an arrays structure to 2 levels. It means that each array under the second level will be merge to its parent. Only two levels are kept.
//
// Empty arrays are ignored.
//
// var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
// flattenTwoLevels(array); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]
//
// flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) // should return [1,[2,3,4,5]]

function flattenTwoLevels(array) {
  let arr = array.slice(0);

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (arr[i].some(a => Array.isArray(a))) {
        arr[i] = flatten(arr[i]);
      }
    }
  }

  return arr;

  function flatten(array) {
    let arr = [];

    array.forEach(function(item) {
      arr = arr.concat(Array.isArray(item) ? flatten(item) : item);
    })

    return arr;
  }
}
