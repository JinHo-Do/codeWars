// https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript
//
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.
//
// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

function formatWords(words){
  if (words === null || !words.length) return '';

  words = words.filter(v => v !== '');
  let useAnd = words.splice(words.length - 2).join(' and ');

  return words.concat(useAnd).join(', ');
}
