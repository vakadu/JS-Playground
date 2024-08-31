function customAt(array, at) {
	if (at < 0) {
		at = array.length + at;
	}

	for (let i = 0; i < array.length; i++) {
		if (i === at) {
			return array[i];
		}
	}

	return undefined;
}

console.log(customAt([5, 12, 8, 130, 44], 2));
console.log(customAt([5, 12, 8, 130, 44], -1));
console.log(customAt([5, 12, 8, 130, 44], 1000));
