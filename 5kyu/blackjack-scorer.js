// https://www.codewars.com/kata/blackjack-scorer/train/javascript
//
// Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).
//
// This function takes one parameter which is an array of strings that represent each card in the hand. Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"
//
// It returns a number which is the score of the hand. Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
//
// Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
//
// Examples:
//
// scoreHand(["A"]); //=> 11
// scoreHand(["A", "J"]); //=> 21
// scoreHand(["A", "10", "A"]); //=> 12
// scoreHand(["5", "3", "7"]); //=> 15
// scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25

function scoreHand(cards) {
  let sum = 0;
  let ace = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
      sum += 10;
    } else if (cards[i] === 'A') {
      ace++;
    } else {
      sum += +cards[i];
    }
  }

  for (let i = 0; i < ace; i++) {
    if (ace === 2 && sum === 10) {
      sum += 2;
      break;
    } else if (sum + 11 <= 21) {
      sum += 11;
    } else {
      sum += 1;
    }
  }

  return sum;
}
