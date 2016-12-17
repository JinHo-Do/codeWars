// https://www.codewars.com/kata/word-finder/train/javascript
//
// In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.
//
// Example:
//
// var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
// fruits.getMatchingWords('lemon');     // must return []
// fruits.getMatchingWords('cherr??');   // must return []
// fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
// fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
// Additional Notes:
//
// the words and patterns are all lowercase
// the order of the returned words doesn't matter

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  let sameLen = this.words.filter(v => v.length === pattern.length);
  let output = sameLen.filter(v => {
    for (let i = 0; i < v.length; i++) {
      if (v[i] !== pattern[i] && pattern[i] !== '?') {
        return false;
      }
    }
    return true;
  });

  return output;
};

  // let arr = [];
  // let words = this.words;
  // let find = pattern.split('');
  //
  // for (let i = 0; i < words.length; i++) {
  //   let check = false;
  //   for (let j = 0; j < words[i].length; j++) {
  //     if (words[i].length !== find.length) {
  //       check = false;
  //       break;
  //     }
  //     if (words[i][j] === find[j] || find[j] === '?') {
  //       check = true;
  //     } else {
  //       check = false;
  //       break;
  //     }
  //   }
  //   if (check) {
  //     arr.push(words[i]);
  //   }
  // }
//   return arr;
// };
