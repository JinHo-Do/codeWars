// https://www.codewars.com/kata/counting-duplicates/train/javascript
//
// Count the number of Duplicates
//
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.
//
// Example
//
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'
// FUNDAMENTALSSTRI

function duplicateCount(text){
  let sortedTxt = text.toLowerCase().split('');
  let obj = {};
  let count = 0;

  for (let i = 0; i < sortedTxt.length; i++) {
    obj[sortedTxt[i]] === undefined ? obj[sortedTxt[i]] = 1 : obj[sortedTxt[i]]++;

    if (obj[sortedTxt[i]] === 2) {
      count += 1;
    }
  }

  return count;
}
