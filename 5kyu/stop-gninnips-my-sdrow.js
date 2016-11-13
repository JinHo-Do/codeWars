// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

function spinWords(a) {
  var arr = a.split(' ');

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > 4) {
      arr[i] = arr[i].split('').reverse().join('');
    }

  }

  return arr.join(' ');
}
