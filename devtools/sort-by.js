function getNestedValue(obj, k) {
	return obj[k];
}

function sortBy(arr, key) {
	return arr.slice().sort((a, b) => {
		const aVal = getNestedValue(a, key);
		const bVal = getNestedValue(b, key);

		if (aVal < bVal) return -1;
		if (aVal > bVal) return 1;
	});
}

console.log(sortBy([{ a: 1 }, { a: 3 }, { a: 2 }], 'a'));
console.log(
	sortBy(
		[
			{ a: 1, b: 'z' },
			{ a: 2, b: 'y' },
			{ a: 1, b: 'x' },
			{ a: 2, b: 'w' },
		],
		'a'
	)
);
