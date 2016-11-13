// https://www.codewars.com/kata/framed-reflection/train/javascript
//
// 100th Kata
//
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:
//
// 'Hello World'
//
// would give:

function mirror(text){
  let arr = text.split(' ');
  let reversed = [];
  let revStr = '';
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    reversed.push(arr[i].split('').reverse().join(''));
    if (reversed[i].length > maxLen) {
      maxLen = reversed[i].length;
    }
  }

  for (let i = 0; i < reversed.length; i++) {
    let temp = reversed[i];
    if (reversed[i].length < maxLen) {
      while (temp.length !== maxLen) {
        temp += ' ';
      }
      reversed[i] = temp;
    }

    if (i === 0 && reversed.length !== 1) {
      revStr += ' ' + reversed[i] + ' *\n';
    } else if (i === 0 && reversed.length === 1) {
      revStr += ' ' + reversed[i] + ' ';
    } else if (i !== reversed.length - 1) {
      revStr += '* ' + reversed[i] + ' *\n';
    } else {
      revStr += '* ' + reversed[i] + ' ';
    }
  }

  let star = '';

  for (let i = 0; i < maxLen + 4; i++) {
    star += '*';
  }

  star += '\n*';

  return star + revStr + star.split('').reverse().join('');
}
