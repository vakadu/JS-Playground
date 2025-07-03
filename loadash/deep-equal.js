function deepEqual(o1, o2) {

    if(o1 === o2) {
        return true
    }

    debugger
    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for(let key of keys1) {
        let v1 = o1[key];
        let v2 = o2[key];

        if(typeof v1 === 'object' && typeof v2 === 'object') {
            if(!deepEqual(v1, v2)) {
                return false
            }
        } else if(v1 !== v2) {
            return false
        }
    }

    return true

}

// console.log(deepEqual(5, 5));               // Output: true
// console.log(deepEqual('hello', 'hello'));   // Output: true
// console.log(deepEqual(true, false));        // Output: false
// console.log(deepEqual('test', 'TEST'));    // Output: false

// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };
// console.log(deepEqual(obj1, obj2));         // Output: true

// const obj3 = { a: 1, b: 3 };
// console.log(deepEqual(obj1, obj3));         // Output: false


// const nestedObj1 = { a: 1, b: { c: 2 } };
// const nestedObj2 = { a: 1, b: { c: 2 } };
// console.log(deepEqual(nestedObj1, nestedObj2));  // Output: true

// const nestedObj3 = { a: 1, b: { c: 3 } };
// console.log(deepEqual(nestedObj1, nestedObj3));  // Output: false

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(deepEqual(arr1, arr2));         // Output: true

const arr3 = [1, 2, 4];
console.log(deepEqual(arr1, arr3));         // Output: false
