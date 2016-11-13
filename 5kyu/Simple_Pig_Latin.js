// https://www.codewars.com/kata/simple-pig-latin/train/javascript

function pigIt(str){
  var out = '';
  str = str.split(' ');
  
  for (var i = 0; i < str.length; i++) {
    var temp = '';

    for (var j = 0; j < str[i].length; j++) {

      if (j === 0) {
        temp = str[i][j];
      } else if (j > 0 && j !== str[i].length - 1) {
        out += str[i][j];
      } else if (j === str[i].length - 1 && i !== str.length - 1){
        out += str[i][j] + temp + 'ay' + ' ';
      } else {
        out += str[i][j] + temp + 'ay';
      }

    }

  }

  return out;
}
