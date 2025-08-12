function isArrayBuffer(value) {
    return Object.prototype.toString.call(value) === '[object ArrayBuffer]';
}

console.log(isArrayBuffer(new ArrayBuffer(8)));  // true
console.log(isArrayBuffer([]));                  // false
console.log(isArrayBuffer({}));                  // false
console.log(isArrayBuffer(new SharedArrayBuffer(8))); // false (Lodash returns false for SharedArrayBuffer)
