function deepEqual(v1, v2) {
	if (v1 === null || v2 === null) {
		return v1 === v2;
	}

	//primitives
	if (typeof v1 !== 'object' || typeof v2 !== 'object') {
		return v1 === v2;
	}

	//arrays
	if (Array.isArray(v1) && Array.isArray(v2)) {
		if (v1.length !== v2.length) {
			return false;
		}

		for (let i = 0; i < v1.length; i++) {
			if (!deepEqual(v1[i], v2[i])) {
				return false;
			}
		}

		return true;
	}

	//objects
	const valOnes = Object.keys(v1);
	const valTwos = Object.keys(v2);
	if (valOnes.length !== valTwos.length) {
		return false;
	}

	for (let key in v1) {
		let key1 = v1[key];
		let key2 = v2[key];
		if (!deepEqual(key1, key2)) {
			return false;
		}
	}

	return true;
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqual('foo', 'foo'));
console.log(deepEqual('foo', 'bar'));
console.log(deepEqual(true, true));
console.log(deepEqual(true, false));

console.log('===================');

console.log(deepEqual(1, '1'));
console.log(deepEqual(true, 1));
console.log(deepEqual(null, undefined));

console.log(deepEqual(null, null));
console.log(deepEqual(undefined, undefined));

console.log('===================');

console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual([1, 2, 3], [3, 2, 1]));
console.log(deepEqual([1, [2, 3]], [1, [2, 3]]));
console.log(deepEqual([1, [2, 3]], [1, [3, 2]]));

console.log(deepEqual([1, [2, 3]], 1));

console.log('===================');

console.log(deepEqual({ a: 1 }, { a: 1 }));
console.log(deepEqual({ a: 1 }, { a: 2 }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1 }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }));
console.log(deepEqual({}, {}));
console.log('===================');
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 1 } }));
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 2 } }));
console.log(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } }));
console.log(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 4 } } }));
