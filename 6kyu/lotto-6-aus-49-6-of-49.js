// https://www.codewars.com/kata/lotto-6-aus-49-6-of-49/train/javascript
//
// In Germany we have "LOTTO 6 aus 49". That means that 6 of 49 numbers are drawn as winning combination.
// There is also a "Superzahl", an additional number, which can increase your winning category.
//
// In this kata you have to write two methods.
//
// function numberGenerator()
//
// function checkForWinningCategory(checkCombination, winningCombination)
// The first method is for drawing the lottery numbers.
// You have to create an array with 7 random numbers. 6 from these are from 1 - 49.
// Of Course every number may only occure once.
// And the 7th number is the "Superzahl". A number from 0 - 9. This number is independent from the first six numbers.
// The first 6 numbers have to be in ascending order.
//
// A result could be:
// 4, 9, 17, 22, 25, 35, 0
// Or:
// 4, 18, 22, 34, 41, 44, 4
//
// The second method should check a given number against the winning combination and have to return the winning category:
//
// 1  - 6 numbers and Superzahl match
// 2  - 6 numbers match
// 3  - 5 numbers and Superzahl match
// 4  - 5 numbers match
// 5  - 4 numbers and Superzahl match
// 6  - 4 numbers match
// 7  - 3 numbers and Superzahl match
// 8  - 3 numbers match
// 9  - 2 numbers and Superzahl match
// -1 - if the numbers do not match any of the rules above
//
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have created other katas. Have a look if you like coding and challenges.

function numberGenerator() {  // LOTTO MAKER!!
  let random = [];

  while (random.length < 6) {
    let makeNum = Math.floor(Math.random() * (49 - 1 + 1) + 1);

    if (random.indexOf(makeNum) === -1) {
      random.push(makeNum);
    }

  }

  random.sort((a, b) => a - b);
  random.push(Math.floor(Math.random() * 10));
  return random;
}

function checkForWinningCategory(checkCombination, winningCombination) {
  let bonusNum = winningCombination.splice(6, 1)[0];
  let checkLotto = 0;

  for (let i = 0; i < winningCombination.length; i++) {
    if (winningCombination.indexOf(checkCombination[i]) > -1) {
      checkLotto++;
    }
  }

  if (checkLotto === 6 && checkCombination[6] === bonusNum) {
    return 1;
  } else if (checkLotto === 6) {
    return 2;
  } else if (checkLotto === 5 && checkCombination[6] === bonusNum) {
    return 3;
  } else if (checkLotto === 5) {
    return 4;
  } else if (checkLotto === 4 && checkCombination[6] === bonusNum) {
    return 5;
  } else if (checkLotto === 4) {
    return 6;
  } else if (checkLotto === 3 && checkCombination[6] === bonusNum) {
    return 7;
  } else if (checkLotto === 3) {
    return 8;
  } else if (checkLotto === 2 && checkCombination[6] === bonusNum) {
    return 9;
  } else {
    return -1;
  }
}
