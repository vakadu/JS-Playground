function isObject(value) {
    // your code here

    let set = new WeakSet()
    console.log(Object.prototype.toString.call(value), typeof value);

    return value !== null && (type === 'object' || type === 'function')
    
}

console.log(isObject({}));       // true
console.log(isObject([1, 2]));   // true
console.log(isObject(() => {})); // true
console.log(isObject(null));     // false
