function isError(value) {
    // your code here
    console.log(value, value instanceof Error, Object.prototype.toString.call(value));
    // return value instanceof Error
    return Object.prototype.toString.call(value) === "[object Error]"
}

console.log(isError(new Error()));           // true
console.log(isError(Error));                 // false
console.log(isError({ message: 'fail' }));   // false
