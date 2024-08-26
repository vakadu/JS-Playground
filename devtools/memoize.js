function add(a, b) {
	return a + b;
}

function memoizeOne(fn) {
	let memo = {};
	return (...params) => {
		const key = JSON.stringify(params);

		if (key in memo) {
			console.log('cach');

			return memo[key];
		}

		memo[key] = fn(...params);
		return memo[key];
	};
}

const memoizedAdd = memoizeOne(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(1, 2));
