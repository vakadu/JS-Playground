function defaults(o1, ...o2) {
    let result = {...o1};

    for (const element of o2) {
        for (const key in element) {
            const elem = element[key];
                    if(!result[key]) {
            result[key] = elem
        }
        }
    }

    // for (const key in o2) {
    //     const element = o2[key];
        // if(!o1[key]) {
        //     o1[key] = element
        // }
    // }

    return result
}

// const obj = { a: 1 };
// const defaultObj = { a: 2, b: 3 };

// defaults(obj, defaultObj);

// console.log(obj.a); // Expected: 1 (value already exists in obj)
// console.log(obj.b); // Expected: 3 (default added)


// const obj = { a: 5, b: 6 };
// const defaultObj = { a: 1, b: 2 };

// defaults(obj, defaultObj);

// console.log(obj.a); // Expected: 5 (no change, already exists)
// console.log(obj.b); // Expected: 6 (no change, already exists)

const obj = { a: 1 };
const source1 = { a: 2, b: 3 };
const source2 = { b: 4, c: 5 };

defaults(obj, source1, source2);

console.log(obj.a); // Expected: 1 (no change)
console.log(obj.b); // Expected: 3 (from source1)
console.log(obj.c); // Expected: 5 (from source2)
