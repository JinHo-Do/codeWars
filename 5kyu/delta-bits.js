// https://www.codewars.com/kata/delta-bits/train/javascript
//
// Write a function convertBits to determine the number of bits required to convert positive integer A to positive integer B.
//
// For example, you can change 31 to 14 by flipping the 4th and 0th bit:
//
//  31  0 0 0 1 1 1 1 1
//  14  0 0 0 0 1 1 1 0
// ---  ---------------
// bit  7 6 5 4 3 2 1 0
// Thus 31 and 14 should return 2.

function convertBits(a, b){
  let a2 = a.toString(2).split('').reverse();
  let b2 = b.toString(2).split('').reverse();
  let longer = a2, shorter = b2;
  let count = 0;

  if (a2.length < b2.length) {
    longer = b2, shorter = a2;
  }

  for (let i = 0; i < longer.length; i++) {
    if (shorter[i] === undefined) shorter[i] = '0';
    if (longer[i] !== shorter[i]) count++;
  }

  return count;
}
