function isArrayLikeObject(value) {
    return value !== null && typeof value === "object" && value.length > 0
}

console.log(isArrayLikeObject([1, 2, 3]));           // true
console.log(isArrayLikeObject({ length: 2 }));       // true
console.log(isArrayLikeObject('abc'));               // false (string is not an object)
console.log(isArrayLikeObject(null));                // false
