// https://www.codewars.com/kata/numbers-plus-pattern/train/javascript
//
// Task
//
// Raj once wanted to code a program to make a plus sign using the numbers but he didn't have any idea to do so. Using 'n' as a parameter in the function pattern complete the code and solve the pattern so that Raj fells happy.
//
// Rules/Note:
//
// You are assured that n>1
// There are white spaces on top and bottom left corner (take help of test cases)
// Examples
//
// pattern(2)
//
//  1
// 121
//  1
// pattern(5)
//
//     1
//     2
//     3
//     4
// 123454321
//     4
//     3
//     2
//     1
// pattern(12)
//
//              1
//              2
//              3
//              4
//              5
//              6
//              7
//              8
//              9
//              0
//              1
//   12345678901210987654321
//              1
//              0
//              9
//              8
//              7
//              6
//              5
//              4
//              3
//              2
//              1

function pattern(n){
  var output = '';
  var space = '';

  for (var i = 0; i < n - 1; i++) {
    space += ' ';
  }

  for (var i = 1; i <= n; i++) {
    if (i === n) {
      output += collect(n);

      for (var j = n - 1; j >= 1; j--) {
        if (String(j).length === 2) {
          let temp = String(j);
          output += space + temp[temp.length - 1] + '\n';
        } else {
        output += space + j + '\n';
        }
      }

    } else {
      if (String(i).length === 2) {
        let temp = String(i);
        output += space + temp[temp.length - 1] + '\n';
      } else {
        output += space + i + '\n';
      }
    }

  }

  function collect(m) {
    var str = '';

    for (var i = 1; i <= m; i++) {
      if (i === m) {
        for (var j = m; j >= 1; j--) {
          if (String(j).length === 2) {
            let temp = String(j);
            str += temp[temp.length - 1];
          } else {
            str += j;
          }
        }
      } else {
        if (String(i).length === 2) {
          let temp = String(i);
          str += temp[temp.length - 1];
        } else {
          str += i;
        }
      }
    }

    return str + '\n';
  }

  return output;
}
