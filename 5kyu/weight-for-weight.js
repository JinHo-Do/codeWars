// https://www.codewars.com/kata/weight-for-weight/train/javascript

function orderWeight(strng) {
  var arr = strng.split(' ');
  var sumArr = new Array(arr.length).fill(0);

  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      sumArr[i] += +arr[i][j];
    }
  }

  var change = true;

  while (change) {
    change = false;

    for (var i = 0; i < sumArr.length - 1; i++) {
      if (sumArr[i] > sumArr[i + 1]) {

        var trade = function () {
          var temp1 = sumArr[i];
          var temp2 = arr[i];
          sumArr[i] = sumArr[i + 1];
          arr[i] = arr[i + 1];
          sumArr[i + 1] = temp1;
          arr[i + 1] = temp2;
          change = true;
          }

        trade();
      } else if (sumArr[i] === sumArr[i + 1]) {
        if (arr[i] > arr[i + 1]) {
          trade();
        }
      }

    }

  }

  return arr.join(' ');
}
