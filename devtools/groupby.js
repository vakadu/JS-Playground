import { groupBy } from 'lodash';

function groupby(collection, property) {
	if (!collection || typeof collection !== 'object') {
		return {};
	}

	const isPropFunc = typeof property === 'function';
	const isPropString = typeof property === 'string';

	return collection.reduce((acc, curr) => {
		let key;
		if (isPropFunc) {
			key = property(curr);
		} else if (isPropString) {
			key = property.split('.').reduce((obj, prop) => {
				return obj[prop];
			}, curr);
		}

		if (acc[key]) {
			acc[key].push(curr);
		} else {
			acc[key] = [curr];
		}

		return acc;
	}, {});
}

// console.log(groupby(3, Math.floor));
// console.log(groupby([6.1, 4.2, 6.3], Math.floor));
// console.log(groupby(['one', 'two', 'three', 'four'], 'length'));
// console.log(
// 	groupby(
// 		[
// 			{ name: 'asparagus', type: 'vegetables', quantity: 5 },
// 			{ name: 'bananas', type: 'fruit', quantity: 0 },
// 			{ name: 'goat', type: 'meat', quantity: 23 },
// 			{ name: 'cherries', type: 'fruit', quantity: 5 },
// 			{ name: 'fish', type: 'meat', quantity: 22 },
// 		],
// 		'type'
// 	)
// );
console.log(groupby([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }], 'a.b.c'));
// console.log(groupby([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }], 'a.c'));
