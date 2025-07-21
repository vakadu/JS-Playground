function cloneDeep(obj) {
    if(typeof obj === 'string') {
        return `${obj}`
    }

    if(typeof obj === "number" || typeof obj === "boolean") {
        return obj
    }

    let result = Array.isArray(obj) ? [] : {};

    if(Array.isArray(obj)) {
        for (let index = 0; index < obj.length; index++) {
            const element = obj[index];
            result[index] = cloneDeep(element)
        }
    }

    if(typeof obj === "object" && !Array.isArray(obj)) {
        for (const key in obj) {
            const value = obj[key];
            if(obj.hasOwnProperty(key)) {
                result[key] = cloneDeep(value)
            }
        }
    }

    if(obj instanceof Date) {
        return new Date(obj)
    }

    return result
}

// const obj1 = { a: 1, b: 2 };
// const clone1 = cloneDeep(obj1);

// console.log(clone1); // { a: 1, b: 2 }
// console.log(clone1 === obj1); // false, they are not the same reference
// console.log(clone1.a === obj1.a); // true, primitive values should be identical

const obj2 = { a: 1, b: { c: 2 } };
const clone2 = cloneDeep(obj2);

console.log(clone2); // { a: 1, b: { c: 2 } }
console.log(clone2.b === obj2.b); // false, nested objects should be deep cloned

// const arr1 = [1, 2, 3];
// const clone3 = cloneDeep(arr1);

// console.log(clone3); // [1, 2, 3]
// console.log(clone3 === arr1); // false, they are not the same reference

// const arr2 = [1, [2, 3], 4];
// const clone4 = cloneDeep(arr2);

// console.log(clone4); // [1, [2, 3], 4]
// console.log(clone4[1] === arr2[1]); // false, nested arrays should be deep cloned

// const arr3 = [{ a: 1 }, { b: 2 }];
// const clone5 = cloneDeep(arr3);

// console.log(clone5); // [{ a: 1 }, { b: 2 }]
// console.log(clone5[0] === arr3[0]); // false, objects in the array should be deep cloned

// const obj3 = { a: [1, 2, 3], b: 4 };
// const clone6 = cloneDeep(obj3);

// console.log(clone6); // { a: [1, 2, 3], b: 4 }
// console.log(clone6.a === obj3.a); // false,


// const date = new Date();
// const clone3 = cloneDeep(date);
// console.log(clone3);

// console.log(clone3 instanceof Date); // true
