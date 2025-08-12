function isDate(value) {
    // your code here
    console.log(value, typeof value, value instanceof Date, Object.prototype.toString.call(value));
    // return value !== null && value instanceof Date
    return Object.prototype.toString.call(value) === "[object Date]"
}

console.log(isDate(new Date()));  // true
console.log(isDate('2020-01-01')); // false
