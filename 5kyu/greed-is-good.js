// https://www.codewars.com/kata/greed-is-good/train/javascript
//
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//
// Example scoring
//
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

function score( dice ) {
  dice = dice.sort();
  let sum = 0;

  if (dice.filter(v => v === 6).length >= 3) {
    sum += 600;
  }
  if (dice.filter(v => v === 5).length >= 1) {
    if (dice.filter(v => v === 5).length === 3) {
      sum += 500;
    } else if (dice.filter(v => v === 5).length === 4) {
      sum += 10;
    } else if (dice.filter(v => v === 5).length === 5) {
      sum += 600;
    } else if (dice.filter(v => v === 5).length === 1) {
      sum += 50;
    }
  }
  if (dice.filter(v => v === 4).length >= 3) {
    sum += 400;
  }
  if (dice.filter(v => v === 3).length >= 3) {
    sum += 300;
  }
  if (dice.filter(v => v === 2).length >= 3) {
    sum += 200;
  }
  if (dice.filter(v => v === 1).length >= 1) {
    if (dice.filter(v => v === 1).length === 3) {
      sum += 1000;
    } else if (dice.filter(v => v === 1).length === 4) {
      sum += 1100;
    } else if (dice.filter(v => v === 1).length === 5) {
      sum += 1200;
    } else if (dice.filter(v => v === 1).length === 1) {
      sum += 100;
    } else if (dice.filter(v => v === 1).length === 2) {
      sum += 200;
    }
  }

  return sum;
}
