// https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
//
// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
//
// The following are examples of expected output values:
// 
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  let str = '';

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < 0) {
      arguments[i] = 0;
    } else if (arguments[i] > 255) {
      arguments[i] = 255;
    }

    if (String(arguments[i]).length === 1) {
      str += '0' + arguments[i].toString(16);
    }  else {
      str += arguments[i].toString(16);
    }
  }

  return str.toUpperCase();
}
