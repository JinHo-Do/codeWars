// https://www.codewars.com/kata/human-readable-time/train/javascript

function humanReadable(seconds) {
  var arr = [Math.floor(seconds / 60 / 60), Math.floor(seconds / 60 % 60), seconds % 60];

  for (var i = 0; i < arr.length; i++) {
    arr[i] += '';

    if (arr[i].length === 1) {
      arr[i] = '0' + arr[i];
    }

  }

  return arr.join(':');
}
