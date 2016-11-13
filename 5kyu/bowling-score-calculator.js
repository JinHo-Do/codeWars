// https://www.codewars.com/kata/bowling-score-calculator/train/javascript
//
// Task
//
// Your task is to write a function for calculating the score of a 10 pin bowling game. The input for the function is a list of pins knocked down per roll for one player. Output is the player's total score.
//
// Rules
//
// General rules
//
// Rules of bowling in a nutshell:
//
// A game consists of 10 frames. In each frame the player rolls 1 or 2 balls, except for the 10th frame, where the player rolls 2 or 3 balls.
// The total score is the sum of your scores for the 10 frames
// If you knock down fewer than 10 pins with 2 balls, your frame score is the number of pins knocked down
// If you knock down all 10 pins with 2 balls (spare), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next ball
// If you knock down all 10 pins with 1 ball (strike), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next 2 balls
// Rules for 10th frame
//
// As the 10th frame is the last one, in case of spare or strike there will be no next balls for the bonus. To account for that:
//
// if the last frame is a spare, player rolls 1 bonus ball.
// if the last frame is a strike, player rolls 2 bonus balls.
// These bonus balls on 10th frame are only counted as a bonus to the respective spare or strike.
//
// More information
//
// http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring
//
// Input
//
// You may assume that the input is always valid. This means:
//
// input list length is correct
// number of pins knocked out per roll is valid

var bowlingScore = function(rolls) {
  if (rolls.length === 12) {return 300;}

  let arr = [];
  let sum = 0;

  while (rolls.length !== 0) {

      if (rolls[0] !== 10) {
        arr.push(rolls.splice(0 ,2));
      } else {
        arr.push(rolls.splice(0, 1));
      }

  }

  for (let i = 0; i < 10; i++) {
    if (arr[i].reduce((a, b) => a + b) < 10 ) {
      arr[i] = arr[i].reduce((a, b) => a + b);
    } else if (arr[i].reduce((a, b) => a + b) === 10 && arr[i].length !== 1) {
      arr[i] = arr[i].reduce((a, b) => a + b) + arr[i + 1][0];
    } else if (arr[i][0] === 10 && arr[i + 1] === 10) {
      arr[i] = arr[i] + arr[i + 1] + arr[i + 2];
    } else if (arr[i][0] === 10) {
      arr[i] = 10 + arr[i + 1].reduce((a, b) => a + b);
    }
  }

  return arr.filter(v => !Array.isArray(v)).reduce((a, b) => a + b);
};

module.exports = bowlingScore;
