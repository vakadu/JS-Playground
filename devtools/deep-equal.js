function deepEqual(v1, v2) {}

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
