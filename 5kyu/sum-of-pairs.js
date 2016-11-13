// https://www.codewars.com/kata/sum-of-pairs/train/javascript
//
// Sum of Pairs
//
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]
//
// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)
//
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.
//
// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// var sum_pairs=function(ints, s){
//   let idxTerm = ints.length;
//   let idxI, idxJ;
//
//   for (let i = 0; i < ints.length; i++) {
//
//     if (ints.lastIndexOf(s - ints[i]) > -1 && ints.lastIndexOf(s - ints[i]) > i) {
//       if (idxTerm > ints.lastIndexOf(s - ints[i]) - i) {
//         idxTerm = ints.lastIndexOf(s - ints[i]) - i;
//         idxI = i, idxJ = ints.lastIndexOf(s - ints[i]);
//       }
//     }
//
//   }
//   // console.log(ints, ints[idxI], ints[idxJ]);
//   return idxI === undefined ? undefined : [ints[idxI], ints[idxJ]];
// };

// var sum_pairs=function(ints, s){
//   let idxTerm = ints.length;
//   let idxI, idxJ;
//
//   for (let i = 0; i < ints.length; i++) {
//     let newInts = ints.slice(0);
//
//     for (let j = i; j < newInts.length; j++) {
//       if (ints[i] + newInts[j] === s) {
//         if (j - i < idxTerm && j - i > 0) {
//           idxTerm = j - i, idxI = i, idxJ = j;
//         }
//       }
//     }
//   }
//   console.log(ints, ints[idxI], ints[idxJ]);
//   return idxI === undefined ? undefined : [ints[idxI], ints[idxJ]];
// };
