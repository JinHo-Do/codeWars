// https://www.codewars.com/kata/extract-the-ids-from-the-data-set/train/javascript
//
// Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:
//
// var data = {
//   id: 1,
//   items: [
//     {id: 2},
//     {id: 3, items: [
//       {id: 4},
//       {id: 5}
//     ]}
//   ]
// }
//
// extractIds(data) // should return [1,2,3,4,5]
// The method should be able to handle the case of empty data being passed in.
//
// Note: The only arrays that need to be traversed are those assigned to the "items" property.

function extractIds(data){
  let arr = [];

  for (let key in data) {
    if (key === 'id') {
      arr = arr.concat(data[key]);
    } else if (Array.isArray(data[key])) {
      for (let i = 0; i < data[key].length; i++) {
        arr = arr.concat(extractIds(data[key][i]));
      }
    }
  }

  return arr;
}
