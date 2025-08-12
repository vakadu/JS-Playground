function isEmpty(value) {
    // your code here

    if(value === null || typeof value === "boolean" || typeof value === "number") {
        return true
    }

    if(Array.isArray(value) || typeof value === "string") {
        return value.length <=0
    }

    if(value instanceof Map || value instanceof Set) {
        return value.size === 0
    }
    
    if(typeof value === "object") {
        return Object.keys(value).length <= 0
    }

    return true
}

console.log(isEmpty(null));                // true
console.log(isEmpty(true));                // true
console.log(isEmpty(1));                   // true
console.log(isEmpty([1, 2, 3]));           // false
console.log(isEmpty({ a: 1 }));            // false
console.log(isEmpty('abc'));               // false
console.log(isEmpty(''));                  // true
console.log(isEmpty(new Map()));           // true
console.log(isEmpty(new Set([1,2])));      // false
