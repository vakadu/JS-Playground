function customIsEqual(o1, o2) {
    if(o1 === o2) {
        return true
    }

    if(Array.isArray(o1) && Array.isArray(o2)) {
        if(o1.length !== o2.length) {
            return false
        }

        for (let index = 0; index < o1.length; index++) {
            const element1 = o1[index];
            const element2 = o2[index];
            if(!customIsEqual(element1, element2)) {
                return false
            }
        }
        return true
    }

    let k1 = Object.keys(o1), k2 = Object.keys(o2);
    if (k1.length !== k2.length) return false;

    for (const key of k1) {
        if(!o2.hasOwnProperty(key)) {
            return false
        }

        if(!customIsEqual(o1[key], o2[key])) {
            return false
        }
    }

    return true
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// // const obj2 = { a: 1, b: { x: 10, y: 20 } };
// // console.log(customIsEqual(obj1, obj2));  // Output: true

// const obj3 = { a: 1, b: { x: 10 } };
// console.log(customIsEqual(obj1, obj3));  // Output: false

const obj1 = { a: [1, 2, 3] };
const obj2 = { a: [1, 2, 3] };
console.log(customIsEqual(obj1, obj2));  // Output: true

const obj3 = { a: [1, 2] };
console.log(customIsEqual(obj1, obj3));  // Output: false

