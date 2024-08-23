function flatten(input) {
	let result = [];
	helper(input, result);
	return result;
}

function helper(input, result) {
	if (input.length <= 0) {
		return;
	}

	for (let i = 0; i < input.length; i++) {
		let isItArray = Array.isArray(input[i]);
		if (isItArray) {
			helper(input[i], result);
		} else {
			result.push(input[i]);
		}
	}
}

console.log(
	flatten([
		1,
		2,
		3,
		[4],
		[5, 6, [7], [8, [9, [10]]]],
		11,
		12,
		13,
		[14, [[[[[15, [16]]]]]]],
		17,
		18,
		[19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
	])
);
