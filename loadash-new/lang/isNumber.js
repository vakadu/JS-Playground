function isNumber(value) {
    // your code here
    console.log(typeof value, Object.prototype.toString.call(value) === "[object Number]");
    return Object.prototype.toString.call(value) === "[object Number]"
}

console.log(isNumber(3));            // true
console.log(isNumber(new Number(3))); // true
console.log(isNumber(NaN));           // true
console.log(isNumber('3'));           // false
