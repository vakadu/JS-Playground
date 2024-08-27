import { pickBy } from 'lodash';

function pick(object, keys) {
	// let result = {};

	// keys.forEach((key) => {
	// 	if (key in object) {
	// 		result[key] = object[key];
	// 	}
	// });

	// return result;

	return keys.reduce((acc, key) => {
		if (key in object) {
			acc[key] = object[key];
		}

		return acc;
	}, {});
}

// var object = { a: 1, b: 2, c: 3 };

// console.log(pick(object, ['b', 'a', 'c', 'd']));
// console.log(pick(1, ['a', 'b']));

var object = { a: 1, b: '2', c: 3 };

pickBy(object, isNumber);
