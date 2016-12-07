// https://www.codewars.com/kata/decipher-this/train/javascript
//
// Decipher this!
// You are given several secret messages you need to decipher. Here are the conditions:
//
// The first letter corresponds to ASCII character code (case sensitive)
// The second letter needs to be switched to the last letter
// The last letter needs to be switched to the second letter
// If it only has one letter, it will be unchanged
// If it only has two letters, you will just need to convert the ASCII character code to a letter
// Keepin' it simple -- there are no special characters
//
// Example:
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let res = [];
  let arr = str.split(' ');

  arr.map(v => {
    let temp = '';
    let ascii = v.split('').filter(s => !isNaN(+s)).join('');
    let str = v.split('').filter(s => isNaN(+s));

    if (str.length > 1) {
      let temp = str[0];
      str[0] = str[str.length - 1];
      str[str.length - 1] = temp;
    }

    temp += String.fromCharCode(ascii) + str.join('');
    res.push(temp);
  });

  return res.join(' ');
};
