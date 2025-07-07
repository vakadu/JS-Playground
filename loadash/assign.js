function customAssign(o1, ...o2) {
    
    // let result = o1;
    
    // for (const key in o2) {
    //     result[key] = o2[key]
    // }
    
    // return result

    let result = {...o1};

    for(let source of o2) {
        for(let key in source) {
            result[key] = source[key]
        }
    }

    return result
}

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const result = customAssign(obj1, obj2);
// console.log(result); // Output: { a: 1, b: 2, c: 3, d: 4 }


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(customAssign(obj1, obj2)); // Output: { a: 1, b: 3, c: 4 } (b is overwritten by obj2)

// const obj1 = { a: { x: 10 }, b: 2 };
// const obj2 = { a: { y: 20 }, c: 3 };
// console.log(customAssign(obj1, obj2)); // Output: { a: { y: 20 }, b: 2, c: 3 } (a is completely replaced)

// const obj1 = { a: 1 };
// const obj2 = { b: null, c: undefined };
// console.log(customAssign(obj1, obj2)); // Output: { a: 1, b: null, c: undefined }

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
console.log(customAssign(obj1, obj2, obj3)); // Output: { a: 1, b: 2, c: 3 }

