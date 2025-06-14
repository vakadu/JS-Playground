// function cloneDeep(input) {
// 	if (typeof input !== 'object' || input === null) {
// 		return input;
// 	}

// 	let output = Array.isArray(input) ? [] : {};

// 	for (let key in input) {
// 		if (input.hasOwnProperty(key)) {
// 			output[key] = cloneDeep(input[key]);
// 		}
// 	}

// 	return output;
// }

function cloneDeep(obj) {
	if(typeof obj !== 'object') {
		return obj
	}

	let output = {};
	for(let key in obj) {
		if(key in obj) {
			output[key] = cloneDeep(obj[key])
		}
	}

	return output
}

var original = {
	name: 'Devtools Tech',
	details: {
		link: 'youtube.com/devtoolstech',
		subs: 3500,
		tags: [{ id: 1, value: 'devtoolstech' }],
	},
};

var cloned = cloneDeep(original);
cloned.name = 'Tech Devtools';
cloned.details.tags[0].value = 'frontend';

console.log(cloned);

console.log(original.name);
console.log(cloned.name);

console.log(original.details.tags[0].value);
console.log(cloned.details.tags[0].value);
