function customMerge(...objects) {
    let result = {};

    for(let object of objects) {
        let keys = new Set([...Object.keys(result), ...Object.keys(object)]);
        
        for(let key of keys) {
            let val1 = result[key];
            let val2 = object[key];
            
            if(val1 && !val2) {
                result[key] = val1
            } else if(!val1 && val2) {
                result[key] = val2
            } else if(typeof val1 === "object" && !Array.isArray(val1) && typeof val2 === "object" && !Array.isArray(val2)) {
                result[key] = customMerge(val1, val2)
            } else if(Array.isArray(val1) && Array.isArray(val2)) {
result[key] = [...val1, ...val2]
            } else {
                result[key] = val2
            }
        }
    }

    return result
}

// const obj1 = { a: { b: 1 }, c: 2 };
// const obj2 = { a: { b: 2, d: 3 }, e: 4 };
// const result = customMerge(obj1, obj2);
// console.log(result); // Output: { a: { b: 2, d: 3 }, c: 2, e: 4 }


// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// console.log(customMerge(obj1, obj2)); // Output: { a: 1, b: 2, c: 3, d: 4 }

// const obj1 = { a: { x: 1, y: 2 }, b: 2 };
// const obj2 = { a: { y: 3, z: 4 }, c: 3 };
// console.log(customMerge(obj1, obj2)); // Output: { a: { x: 1, y: 3, z: 4 }, b: 2, c: 3 }
// // 'a' is merged, but 'y' is overwritten from obj2

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(customMerge(obj1, obj2)); // Output: { a: 1, b: 3, c: 4 }
// // 'b' is overwritten by obj2

const obj1 = { a: [1, 2], b: 2 };
const obj2 = { a: [3, 4], c: 3 };
console.log(customMerge(obj1, obj2)); // Output: { a: [3, 4], b: 2, c: 3 }
// Arrays are replaced entirely, not merged

// const obj1 = { a: { b: [1, 2] } };
// const obj2 = { a: { b: [3, 4] }, c: 3 };
// console.log(customMerge(obj1, obj2)); // Output: { a: { b: [3, 4] }, c: 3 }
// Nested arrays are replaced, not merged

// const obj1 = { a: null, b: undefined };
// const obj2 = { b: 2, c: 3 };
// console.log(customMerge(obj1, obj2)); // Output: { a: null, b: 2, c: 3 }
// 'b' is overwritten with value from obj2, 'a' stays null
