// https://www.codewars.com/kata/adjacent-pairs-in-a-string/train/javascript
//
// You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?
//
// As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of the sentence.
//
// Write a function countAdjacentPairs that counts the number of adjacent pairs in a string. It should be case-insenstive. A word in this kata is a sequence of non-whitespace characters enclosed by whitespace, so the string "dog dog." contains the two words "dog" and "dog.", which differ. The occurence of two or more equal words next after each other count as one.
//
// Example:
//
// //returns 0
// countAdjacentPairs('')
//
// // returns 1
// countAdjacentPairs('cat dog dog')
//
// // returns 1 (The first pair has been matched, and will be ignored from then on).
// countAdjacentPairs('dog dog dog')
//
// // returns 2
// countAdjacentPairs('cat cat dog dog cat')

function countAdjacentPairs(searchString) {
  let arr = searchString.toLowerCase().split(' ').sort();
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] !== resArr[resArr.length - 1]) {
      resArr.push(arr[i]);
    }
  }

  return resArr.length;
}
