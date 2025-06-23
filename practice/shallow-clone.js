function shallowClone(obj) {
    let result = {};

    for(let k in obj) {
        if(typeof obj[k] === 'object' || Array.isArray(obj[k])) {
            result[k] = obj[k]
        } else {
            result[k] = obj[k]
        }
    }

    return result

}

const original = { a: 1, b: { x: 10 }, c: [1, 2, 3] };
const clone = shallowClone(original);

// Modify original object and check if it affects the clone
original.a = 2;
original.b.x = 20;
original.c.push(4);

console.log(original);  // Expected: { a: 2, b: { x: 20 }, c: [1, 2, 3, 4] }
console.log(clone);     // Expected: { a: 1, b: { x: 20 }, c: [1, 2, 3, 4] }
console.log(clone.a);   // Expected: 1 (shallow clone, only primitive 'a' should not be affected)
console.log(clone.b.x); // Expected: 20 (shallow clone, 'b' is affected because of reference)
console.log(clone.c);   // Expected: [1, 2, 3, 4] (shallow clone, 'c' is affected because of reference)

