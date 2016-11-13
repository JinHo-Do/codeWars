// https://www.codewars.com/kata/where-my-anagrams-at/train/javascript
//
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  word = reStr(word);
  let wordsArr = words.map(v => reStr(v));
  let print = [];

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      print.push(words[i]);
    }
  }

  return print;

  function reStr(str) {
    let arr = str.split('');

    let changed = true;

    while (changed) {
      changed = false;

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          changed = true;
        }
      }
    }

    return arr.join('');
  }
}
