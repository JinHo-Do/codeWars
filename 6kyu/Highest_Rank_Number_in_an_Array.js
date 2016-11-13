// https://www.codewars.com/kata/highest-rank-number-in-an-array/train/javascript

function highestRank(arr){
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  var bigger = [];
  var len = 0;

  for (var key in obj) {
    if (obj[key] > len) {
      len = obj[key];
      bigger = [];
      bigger.push(key);
    } else if (obj[key] === len) {
      bigger.push(key);
    }
  }

  return Math.max(...bigger);
}
