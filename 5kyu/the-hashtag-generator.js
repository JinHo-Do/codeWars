// https://www.codewars.com/kata/the-hashtag-generator/train/javascript
//
// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!
//
// Here's the deal:
//
// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:
//
// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
//
// " Hello World " => "#HelloWorld"

function generateHashtag (str) {
  if (str.length === 0) return false;

  let tag = '#';
  let arr = str.split(' ').filter(v => v !== '');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
  }

  tag += arr.join('');

  return tag.length >= 140 ? false : tag;
}
