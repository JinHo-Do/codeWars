// https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/train/javascript
//
// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.
//
// Examples:
//
// //  returns test_controller
// toUnderscore('TestController');
//
// // returns movies_and_books
// toUnderscore('MoviesAndBooks');
//
// // returns app7_test
// toUnderscore('App7Test');
//
// // returns "1"
// toUnderscore(1);

function toUnderscore(string) {
	if (typeof string === 'number') return '' + string;

	let arr = string.split('');
	let res = [];
	let idx = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i].toLowerCase()) {
			arr[i] = arr[i].toLowerCase();
			res.push(arr.slice(idx, i).join(''));
			idx = i;
		} else if (i === arr.length - 1) {
			res.push(arr.slice(idx).join(''));
		}
	}

	return res.join('_').replace(res[0], res[0].toLowerCase());
}
