function isArray(value) {
    // your code here

    // return Array.isArray(value)

    return Object.prototype.toString.call(value) === "[object Array]"
}

console.log(isArray([1, 2, 3]));              // true
console.log(isArray('abc'));                  // false
console.log(isArray(new Array()));            // true
console.log(isArray({ length: 0 }));          // false
