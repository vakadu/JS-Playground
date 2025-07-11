function customMerge(o1, o2) {
    let result ={};
    let keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);

    for (const key of keys) {
        const val1 = o1[key];
        const val2 = o2[key];

        if(val1 && !val2) {
            result[key] = val1
        } else if(!val1 && val2) {
            result[key] = val2
        } else if(Array.isArray(val1) && Array.isArray(val2)) {
            result[key] = [...val1, ...val2];
        } else if(typeof val1 === 'object' && typeof val2 === "object") {
            result[key] = customMerge(val1, val2)
        } else {
            result[key] = val2
        }
    }
    

    return result
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 3 };
// console.log(customMerge(obj1, obj2)); // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }

// const obj1 = { a: [1, 2], b: 2 };
// const obj2 = { a: [3, 4], c: 3 };
// console.log(customMerge(obj1, obj2));  // Output: { a: [3, 4], b: 2, c: 3 }
// Arrays are replaced, not merged


// const obj1 = { a: { b: [1, 2], c: [3, 4] } };
// const obj2 = { a: { b: [5, 6], c: [7, 8] } };
// console.log(customMerge(obj1, obj2));  // Output: { a: { b: [5, 6], c: [7, 8] } }
// Nested arrays are replaced, not merged

// const obj1 = { a: [{ x: 1 }, { y: 2 }] };
// const obj2 = { a: [{ z: 3 }, { w: 4 }] };
// console.log(customMerge(obj1, obj2));  // Output: { a: [{ z: 3 }, { w: 4 }] }
// The objects within the array are replaced

// const obj1 = { a: 1, b: null };
// const obj2 = { b: 2, c: undefined };
// console.log(customMerge(obj1, obj2));  // Output: { a: 1, b: 2, c: undefined }
// 'b' is overwritten by obj2, 'c' is added from obj2

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };
const obj3 = { b: { z: 30 }, d: 4 };
console.log(customMerge(obj1, obj2, obj3));  // Output: { a: 1, b: { x: 10, y: 20, z: 30 }, c: 3, d: 4 }
