// https://www.codewars.com/kata/find-the-smallest/train/javascript

// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.
//
// Doing so, find the smallest number you can get.
//
// Task:
//
// Return an array or a tuple depending on the language (see "Your Test Cases" Haskell) with
//
// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.
// Example:
//
// smallest(261235) --> [126235, 2, 0]
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0
//
// smallest(209917) --> [29917, 0, 1]
//
// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.
//
// smallest(1000000) --> [1, 0, 6]

function smallest(n) {
  var arr = String(n).split('').map(Number);
  var str = String(n);
  var smaller = n, smallIdx = 0, targetIdx = 0;

  for (var i = 0; i < arr.length; i++) {
    var temp1 = arr.splice(i, 1);

    for (var j = 0; j < arr.length + 1; j++) {
      var tempArr = [];
      var temp2 = arr.slice(0, j);
      var temp3 = arr.slice(j);
      tempArr = tempArr.concat(temp2, temp1, temp3);

      if (+tempArr.join('') < smaller) {
        smaller = +tempArr.join(''), smallIdx = i, targetIdx = j;
      }
    }
    arr = String(n).split('').map(Number);
  }
  return [smaller, smallIdx, targetIdx];
};
