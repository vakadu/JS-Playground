function isBoolean(value) {

    return Object.prototype.toString.call(value) === "[object Boolean]"

    // if(typeof value === "boolean") {
    //     return true
    // }

    // if(typeof value === "object" && value instanceof Boolean) {
    //     return true        
    // }

    // if(typeof value === "number") {
    //     return Boolean(value)
    // }
    
    // return value
}

console.log(isBoolean(true));               // true
console.log(isBoolean(false));              // true
console.log(isBoolean(new Boolean(false))); // true
console.log(isBoolean(0));                  // false
