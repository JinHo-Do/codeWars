// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

function digital_root(n) {
  var arr = n.toString(10).split('');

  if (arr.length <= 1) {
    return n;
  } else {
    var sum = arr.reduce(function(a, b) {return +a + +b});
    return digital_root(sum);
  }
}
