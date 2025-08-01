function deepMerge(o1, o2) {
    let result = {};
    let keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);
    
    for (const key of keys) {
        let val1 = o1[key];
        let val2 = o2[key];
        if(typeof val1 === "object" && !Array.isArray(val1) && typeof val2 === "object" && !Array.isArray(val2)) {
            result[key] = deepMerge(val1, val2)
        } else if(Array.isArray(val1) && Array.isArray(val2)) {
            let temp = [...val2];
            result[key] = temp
        } else if (val1 && !val2) {
            result[key] = val1
        } else if(!val1 && val2) {
             result[key] = val2
        } else if(val1 && val2) {
            result[key] = val2
        }
    }

    return result
}


// const obj1 = { a: { b: 1, c: 2 }, d: 3 };
// const obj2 = { a: { b: 2 }, e: 4 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: { b: 2, c: 2 }, d: 3, e: 4 }

// const obj1 = { a: { b: [1, 2], c: 3 }, d: 4 };
// const obj2 = { a: { b: [3, 4] }, e: 5 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: { b: [3, 4], c: 3 }, d: 4, e: 5 }


// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 3, c: 4 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: 3, b: 2, c: 4 }

// const obj1 = { a: { b: { c: { d: 1 } } }, e: 2 };
// const obj2 = { a: { b: { c: { e: 3 } } }, f: 4 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: { b: { c: { d: 1, e: 3 } } } , e: 2, f: 4 }

// const obj1 = {};
// const obj2 = { a: 1, b: 2 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: 1, b: 2 }

// const obj1 = { a: null, b: { c: 1 } };
// const obj2 = { a: 5, b: { d: 2 } };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: 5, b: { c: 1, d: 2 } }

// const obj1 = { a: { b: { c: { d: 1 } } } };
// const obj2 = { a: { b: { c: { e: 2 } } } };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: { b: { c: { d: 1, e: 2 } } } }

// const obj1 = { a: () => 1, b: 2 };
// const obj2 = { a: () => 3, c: 4 };

// console.log(deepMerge(obj1, obj2));
// // Expected: { a: () => 3, b: 2, c: 4 }
// // Note: Functions should be replaced, not merged.


