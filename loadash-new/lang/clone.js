function clone(obj) {
    return Array.isArray(obj) ? [...obj] : {...obj}
}

// const obj = { a: 1, b: { c: 2 } };
// const clonedObj = clone(obj);
// console.log(clonedObj); // Expected: { a: 1, b: { c: 2 } }
// console.log(clonedObj !== obj); // Expected: true (new object)
// console.log(clonedObj.b === obj.b); // Expected: true (shallow copy, same reference)

// const arr = [1, 2, 3];
// const clonedArr = clone(arr);
// console.log(clonedArr); // Expected: [1, 2, 3]
// console.log(clonedArr !== arr); // Expected: true (new array)


// const nestedArr = [1, [2, 3]];
// const clonedNestedArr = clone(nestedArr);
// console.log(clonedNestedArr); // Expected: [1, [2, 3]]
// console.log(clonedNestedArr[1] === nestedArr[1]); // Expected: true (shallow copy, same reference)

const obj = { a: 1, b: { c: 2 } };
const clonedObj = clone(obj);

console.log(clonedObj);  // { a: 1, b: { c: 2 } }
console.log(clonedObj !== obj);  // true (new object)
console.log(clonedObj.b === obj.b);  // true (same reference to nested object)
