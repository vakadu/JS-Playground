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

Array.prototype.myReduce = function (callback, initial_value) {
	var acc = initial_value;
	for (let i = 0; i < this.length; i++) {
		acc = acc ? callback(acc, this[i], i, this) : this[i];
	}
	return acc;
};
//Performing reduce method through custom made reduce called myReduce
const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr, i, nums) => {
	return acc + curr;
}, 0);
console.log(sum);
