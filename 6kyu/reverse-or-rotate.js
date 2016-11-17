// https://www.codewars.com/kata/reverse-or-rotate/train/javascript
//
// The input is a string str of digits. Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse it; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//
// If
//
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""

function revrot(str, sz) {
  if (str.length < sz || str.length === 0 || sz === 0) return '';

  let arr = str.split('').map(Number);
  let splited = [];

  while (arr.length >= sz) {
    let temp = arr.splice(0, sz);

    if (temp.reduce((a, b) => a + b) % 2 === 0) {
      temp = temp.reverse();
    } else {
      let bucket = temp.shift();
      temp.push(bucket);
    }

    splited.push(temp);
  }

  return String(splited).split(',').join('');
}

module.exports = revrot;
