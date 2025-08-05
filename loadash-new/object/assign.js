function assign(o1, ...o2) {
    let result = {...o1};

    for (let index = 0; index < o2.length; index++) {
        const element = o2[index];
        
        if(typeof element === "object") {
            for (const key in element) {
                const newElem = element[key];
                result[key] = newElem
            }
        }
    }

    return result
}

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: 1, b: 3, c: 4 }

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = { c: 3, d: 4 };

// const assignedObj = assign(obj1, obj2, obj3);
// console.log(assignedObj); // Expected: { a: 1, b: 2, c: 3, d: 4 }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3 };

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: 1, b: 3 } (b is overwritten)

// const obj1 = { a: 1 };
// const obj2 = {};

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: 1 } (obj2 has no properties)

// const obj1 = { a: 1 };
// const obj2 = { a: null };

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: null } (obj1's value is replaced by null from obj2)

// const obj1 = { a: 1 };
// const obj2 = { b: undefined };

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: 1, b: undefined } (undefined values are assigned)

// const obj1 = { a: { x: 1 } };
// const obj2 = { a: { y: 2 }, b: 3 };

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); 
// // Expected: { a: { y: 2 }, b: 3 }
// // obj2's 'a' overwrites obj1's 'a', so we get { y: 2 }

// const obj1 = { a: 1 };
// const obj2 = { b: () => 'hello' };

// const assignedObj = assign(obj1, obj2);
// console.log(assignedObj); // Expected: { a: 1, b: [Function] }

const obj1 = { a: [1, 2] };
const obj2 = { b: [3, 4] };

const assignedObj = assign(obj1, obj2);
console.log(assignedObj); // Expected: { a: [1, 2], b: [3, 4] }
