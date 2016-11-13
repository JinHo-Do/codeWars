// https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples:
//
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
//
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
  if (!str) return str;

  var arr = [];

  if (str.indexOf('-') > -1) {
    arr = str.split('-');
  } else if (str.indexOf('_') > -1) {
    arr = str.split('_');
  }

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i][0].toUpperCase();
    arr[i] = arr[i].replace(arr[i][0], temp);
  }

  return arr.join('');
}
