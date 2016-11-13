// https://www.codewars.com/kata/simple-sentences/train/javascript

function makeSentence(parts) {
  var str = parts[0];
  
  for (var i = 1; i < parts.length; i++) {
    if (parts[i] === '.') {
      str += parts[i];
      break;
    } else if (i === parts.length - 1 && parts[i] !== '.') {
      str += ' ' + parts[i] + '.';
    } else if (parts[i] === ',') {
      str += parts[i];
    } else {
      str += ' ' + parts[i];
    }
  }
  
  return str;
}