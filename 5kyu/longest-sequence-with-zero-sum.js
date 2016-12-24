// https://www.codewars.com/kata/longest-sequence-with-zero-sum/train/javascript
//
// Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.
//
// For example:
// maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
//
// Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.

var maxZeroSequence = function(arr) {
  let longest = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i], temp = [];

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum === 0) {
        temp = arr.slice(i, j + 1);
      }
    }

    longest = longest.length < temp.length ? temp : longest;
  }

  return longest;
};
