// https://www.codewars.com/kata/directions-reduction/train/javascript

function dirReduc(arr){
  var change = true;

  while (change) {
  change = false;

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH' || arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH' || arr[i] === 'EAST' && arr[i + 1] === 'WEST' || arr[i] === 'WEST' && arr[i + 1] === 'EAST') {
        arr.splice(i, 2);
        change = true;
      }
    }

  }

  return arr;
}
