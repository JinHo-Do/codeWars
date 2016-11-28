// https://www.codewars.com/kata/make-the-deadfish-swim/train/javascript
//
// Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long.
// 'i' will increment the value ( initially 0 ).
// 'd' will decrement the value.
// 's' will square the value.
// 'o' will output the value into the return array.
// Invalid characters should be ignored.
//
// parse( "iiisdoso" ); // should == [ 8 , 64 ]

function parse(data) {
  let res = 0;
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      res++;
    } else if (data[i] === 'd') {
      res--;
    } else if (data[i] === 's') {
      res = Math.pow(res, 2);
    } else if (data[i] === 'o') {
      arr.push(res);
    }
  }

  return arr;
}
