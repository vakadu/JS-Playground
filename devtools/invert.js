function invert(collection) {
	if (!collection) {
		throw new TypeError(null);
	}
	let index = 0;

	const modifiedObj = Object.keys(collection).reduce((acc, curr) => {
		if (acc[collection[curr]]) {
			acc[collection[curr] + '_' + index] = curr;
		} else {
			acc[collection[curr]] = curr;
		}
		index++;
		return acc;
	}, {});

	return modifiedObj;
}

// const data = { a: 'one', b: 'two' };
const data = { a: 'one', b: 'one', c: 'one', d: 'three', e: 'one' };
// const data = { a: 'one', b: 'one', c: 'one' };
const inverted = invert(data);
console.log(inverted);
