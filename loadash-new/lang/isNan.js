function isNaNValue(value) {
    // your code here
    return Number.isNaN(value)    
}

console.log(isNaNValue(NaN));       // true
console.log(isNaNValue('NaN'));     // false
console.log(isNaNValue(undefined)); // false
