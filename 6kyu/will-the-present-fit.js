// https://www.codewars.com/kata/will-the-present-fit/train/javascript
//
// Santa's elves are boxing presents, and they need your help! Write a function that takes two arrays of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.
//
// Example:
//
// willFit([10,7,16], [13, 32,10]);  //Returns true, box is bigger than present
// willFit([5, 7, 9], [9, 5, 7]);    //Returns false, present and box are same size
// willFit([17, 22, 10],[5, 5, 10]); //Returns false, box is too small

function willFit(present, box){
  return present.every((v, i) => v < box[i]) ||
    present.reverse().every((v, i) => v < box[i]) ||
    rotate(present.reverse()).every((v, i) => v < box[i])

  function rotate(arr) {
    let temp = arr.shift();
    arr.push(temp);
    return arr;
  };
};
