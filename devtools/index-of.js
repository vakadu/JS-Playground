function indexOf(arr, elem, fromIndex = 0) {
	if (fromIndex < 0) {
		fromIndex = arr.length + fromIndex;
	}

	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === elem) {
			return i;
		}
	}

	return -1;
}

console.log(indexOf([1, 2, 9, 8, 9], 9));
console.log(indexOf([1, 2, 9, 8, 9], 3));
console.log(indexOf([1, 2, 9, 8, 9], 9, 3));
console.log(indexOf([1, 2, 9, 8, 9], 9, -1));
