function customMerge(...objects) {
  let result = {};

  for (let object of objects) {
    let keys = new Set([...Object.keys(result), ...Object.keys(object)]);
    for (let key of keys) {
      let val1 = result[key];
      let val2 = object[key];

      if(typeof val1 === "object" && !Array.isArray(val1) && typeof val2 === "object" && !Array.isArray(val2)) {
        result[key] = customMerge(val1, val2)
      }else if (val1 && !val2) {
        result[key] = val1;
      } else if (!val1 && val2) {
        result[key] = val2;
      } else {
        result[key] = val2
      }
    }
  }

  return result;
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 3 };
// console.log(customMerge(obj1, obj2));
// Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }

// const obj1 = { a: [1, 2], b: [3] };
// const obj2 = { a: [3, 4], b: [4, 5] };
// console.log(customMerge(obj1, obj2));
// // Output: { a: [3, 4], b: [4, 5] }

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };
const obj3 = { b: { z: 30 }, d: 4 };
console.log(customMerge(obj1, obj2, obj3));
// Output: { a: 1, b: { x: 10, y: 20, z: 30 }, c: 3, d: 4 }
