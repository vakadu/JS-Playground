function transform(collection, prefix) {
	let result = {};
	// helper(collection, result, [prefix]);
	helper(collection, result, prefix);
	return result;
}

function helper(collection, result, prefix) {
	if (Object.keys(collection).length <= 0) {
		return;
	}

	for (let [key, val] of Object.entries(collection)) {
		const newKey = `${prefix}_${key}`;

		if (typeof val === 'object' && !Array.isArray(val)) {
			helper(val, result, newKey);
		} else {
			result[newKey] = val;
		}
	}
}

// function helper(collection, result, temp) {
// 	if (Object.keys(collection).length <= 0) {
// 		return;
// 	}

// 	for (let i = 0; i < Object.keys(collection).length; i++) {
// 		const key = Object.keys(collection)[i],
// 			val = Object.values(collection)[i];
// 		temp.push(key);

// 		if (isObject(val)) {
// 			helper(val, result, temp);
// 		} else {
// 			result[temp.join('_')] = val;
// 		}
// 		temp.pop();
// 	}
// }

function isObject(obj) {
	return typeof obj === 'object' && obj.constructor === Object;
}

const data = {
	name: 'Devtools Tech',
	channel: {
		youtube: {
			link: 'bit.ly/devtools-yt',
			name: 'Devtools Tech',
			subscribe: 'true',
		},
		platform: {
			link: 'devtools.tech',
			resources: {
				pages: ['/questions', '/resources'],
			},
		},
	},
};

const output = transform(data, 'data');
console.log(output);
