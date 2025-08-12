function isArrayLike(value) {
    // your code here

    return value !== null && typeof value !== 'function' && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER
}

console.log(isArrayLike([1, 2, 3]));      // true
console.log(isArrayLike('abc'));          // true
console.log(isArrayLike({ length: 2 }));  // true
console.log(isArrayLike(() => {}));       // false

