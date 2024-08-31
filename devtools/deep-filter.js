function filter(collection, callback) {
	return helper(collection, callback);
}

function helper(collection, callback) {
	let result = {};
	for (let key in collection) {
		let value = collection[key];

		if (typeof value === 'object') {
			let val = helper(value, callback);
			if (Object.keys(val).length > 0) {
				result[key] = val;
			}
		} else {
			if (callback(value)) {
				result[key] = value;
			}
		}
	}
	return result;
}

const input = {
	a: 1,
	b: {
		c: 2,
		d: -3,
		e: {
			f: {
				g: -4,
			},
		},
		h: {
			i: 5,
			j: 6,
		},
	},
};

const callback = (element) => element >= 0;

const filtered = filter(input, callback);

// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
console.log(filtered);
