function isMatch(object, source) {

    if(Object.keys(source) > Object.keys(object)) {
        return false
    }

    // your code here
    for (const key in object) {
        if(typeof object[key] === "object" && typeof source[key] === "object") {
            
        }
    }

    return false
}

console.log(isMatch({ a: 1, b: 2 }, { a: 1 })); // true
console.log(isMatch({ a: 1 }, { a: 1, b: 2 })); // false
console.log(isMatch({ a: { b: 2 } }, { a: { b: 2 } })); // true
