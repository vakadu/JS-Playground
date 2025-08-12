function isFunction(value) {
    // your code here
    console.log(value, typeof value, Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value) === "[object Function]" || Object.prototype.toString.call(value) === '[object AsyncFunction]'
}

console.log(isFunction(function(){}));   // true
console.log(isFunction(async () => {})); // true
console.log(isFunction(/abc/));          // false
