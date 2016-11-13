// https://www.codewars.com/kata/time-like-string-format/train/javascript
//
// Build up a method that takes an integer and formats it to a 'time - like' format. The method must raise an exception if its hour length is less than 3 digits and greater than 4.
//
// Example:
//
// solution(800); // should return '8:00'
// solution(1000); // should return '10:00'
// solution(1451); // should return '14:51'
// solution(3351); // should return '33:51'
// solution(10000); // should raise an exception

function solution(hour) {
  if (hour < 100 || hour > 9999) {throw new Error();}

  hour = hour.toString();
  let str = '';

  for (let i = hour.length - 1; i >= 0; i--) {
    if (i === Math.floor(hour.length / 2)) {
      str += hour[i] + ':';
    } else {
      str += hour[i];
    }
  }

  return str.split('').reverse().join('');
}
