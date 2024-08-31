function customReduce(array, iterator, intial) {
	let temp = intial;
	for (let i = 0; i < array.length; i++) {
		temp = iterator(temp, array[i]);
	}

	return temp;
}

console.log(
	customReduce(
		[1, 2, 3],
		(acc, curr) => {
			return acc + curr;
		},
		0
	)
);
