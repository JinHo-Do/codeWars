// https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p){
  var str = n + '';
  var sum = 0;

  for (var i = 0; i < str.length; i++)   {
    var temp = 1;

    for (var j = 0; j < i + p; j++) {
      temp = temp * Number(str[i]);
    }

    sum += temp;
  }

  return sum / n % 1 === 0 ? sum / n : -1;
}
