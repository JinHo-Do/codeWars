// https://www.codewars.com/kata/double-cola/train/javascript
//
// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
//
// For example, Penny drinks the third can of cola and the queue will look like this:
//
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of a man who will drink the n-th cola.
//
// Note that in the very beginning the queue looks like that:
//
// Sheldon, Leonard, Penny, Rajesh, Howard
// Input
//
// The input data consist of an array which contains five names, and single integer n.
//
// (1 ≤ n ≤ 1000000000).
// Output / Examples
//
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.
//
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"

function whoIsNext(names, r){
  let arr = new Array(names.length).fill(1);

  if (r <= names.length) {
    return names[r - 1];
  }

  let sum = names.length;

  for (var i = names.length + 1; i <= r; i++) {
    if (i % names.length === 0) {
      arr[names.length - 1] = arr[names.length - 1] * 2;
      sum += arr[names.length - 1];

      if (sum >= r) {
      return names[names.length - 1];
      }

    } else {
      arr[i % names.length - 1] = arr[i % names.length - 1] * 2;
      sum += arr[i % names.length - 1];

      if (sum >= r) {
      return names[i % names.length - 1];
      }

    }

  }

}
