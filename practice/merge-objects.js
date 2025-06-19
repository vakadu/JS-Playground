function mergeObjects(o1,o2) {
    return {
        ...o1,
        ...o2
    }
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { x: 30, z: 40 }, c: 3 };

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };


console.log(mergeObjects(obj1, obj2));


// { a: 1, b: { x: 30, z: 40 }, c: 3 }
