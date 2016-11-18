// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
//
// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''

function list(names){
  if (names.length === 0) return '';
  else if (names.length === 1) return names[0].name;
  else if (names.length === 2) return names[0].name + ' & ' + names[1].name;
  else if (names.length === 3) return names[0].name + ', ' + names[1].name + ' & ' + names[2].name;
  else {
    var str = '';

    for (let i = 0; i < names.length; i++) {
      if (i === names.length - 2) {
        str += names[i].name + ' & ' + names[i + 1].name;
        break;
      } else {
        str += names[i].name + ', ';
      }
    }

    return str;
  }
}
