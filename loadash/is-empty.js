function customIsEmpty(value) {
    if(typeof value === 'string') {
        return !value
    }

    if(typeof value === "number" || typeof value === "boolean") {
        return !value
    }

    if (value === null || value === undefined) {
        return true;
    }

    if(typeof value === "object" && !Array.isArray(value)) {
        let keys = Object.keys(value);
        if(keys.length === 0) {
            return true
        }
        
        for (const key in value) {
            if(!customIsEmpty(value[key])) {
                return false
            }
        }

        return true
    }

    if(Array.isArray(value)) {
        return value.length === 0
    }

    return false
}

// console.log(customIsEmpty({}));       // Output: true
// console.log(customIsEmpty([]));       // Output: true
// console.log(customIsEmpty(''));       // Output: true
// console.log(customIsEmpty({ a: 1 })); // Output: false

// console.log(customIsEmpty({}));       // Output: true
// console.log(customIsEmpty({ a: 1 })); // Output: false

// console.log(customIsEmpty([]));       // Output: true
// console.log(customIsEmpty([1, 2, 3])); // Output: false

// console.log(customIsEmpty(''));       // Output: true
// console.log(customIsEmpty('Hello'));  // Output: false

// console.log(customIsEmpty([null]));  // Output: false
// console.log(customIsEmpty([undefined])); // Output: false

// console.log(customIsEmpty(0));    // Output: true (0 is considered "empty")
// console.log(customIsEmpty(false));// Output: true (false is considered "empty")
// console.log(customIsEmpty(true)); // Output: false (true is not "empty")

const obj1 = { a: { b: {} } };
console.log(customIsEmpty(obj1));   // Output: false (since `a.b` is not empty)

const obj2 = { a: {} };
console.log(customIsEmpty(obj2));   // Output: false (since `a` is not empty)


