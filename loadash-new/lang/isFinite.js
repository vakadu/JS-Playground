function isFiniteNumber(value) {
    // your code here
    console.log(value, typeof value, Object.prototype.toString.call(value), Number.isFinite(value));
    
}

console.log(isFiniteNumber(3));       // true
console.log(isFiniteNumber(Number.MAX_VALUE)); // true
console.log(isFiniteNumber(NaN));     // false
console.log(isFiniteNumber(Infinity));// false
console.log(isFiniteNumber('3'));     // false
