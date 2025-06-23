function deepMerge(o1, o2, str = "") {
  let result = {};
  const keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);

  for (let key of keys) {
    let val1 = o1[key];
    let val2 = o2[key];

    if (val1 && !val2) {
      result[key] = val1;
    } else if (!val1 && val2) {
      result[key] = val2;
    } else if (
      (typeof val1 === "number" || typeof val1 === "string") &&
      (typeof val2 === "number" || typeof val2 === "string")
    ) {
        result[key] = val2
    } else if (Array.isArray(val1) && Array.isArray(val2)) {
      result[key] = [...val1, ...val2];
    } else if (
      typeof val1 === "object" &&
      !Array.isArray(val1) &&
      typeof val2 === "object" &&
      !Array.isArray(val2)
    ) {
      result[key] = deepMerge(val1, val2, str + key);
    }
  }

  return result;
}

// const obj1 = { a: [1, 2], b: { x: 10 }, c: [5] };
// const obj2 = { a: [3, 4], b: { y: 20 }, c: [6], d: 2 };
// {
//     "a": [
//         1,
//         2,
//         3,
//         4
//     ],
//     "b": {
//         "x": 10,
//         "y": 20
//     },
//     "c": [
//         5,
//         6
//     ],
//     "d": 2
// }

// const obj1 = {
//   a: [1, 2],
//   b: { x: 10, y: 20 },
//   c: { d: [1, 2], e: 5 }
// };
// const obj2 = {
//   a: [3, 4],
//   b: { y: 30, z: 40 },
//   c: { d: [3, 4], f: 6 }
// };
// {
//   a: [1, 2, 3, 4],
//   b: { x: 10, y: 30, z: 40 },
//   c: { d: [1, 2, 3, 4], e: 5, f: 6 }
// }

const obj1 = {
  a: 1,
  b: [1, 2, 3],
  c: { x: 10, y: [4, 5] },
  d: { p: 7, q: 8 },
};
const obj2 = {
  a: 2,
  b: [4, 5],
  c: { y: [6, 7], z: 30 },
  d: { q: 9, r: 10 },
  e: 15,
};

// {
//   a: 2,
//   b: [1, 2, 3, 4, 5],
//   c: { x: 10, y: [4, 5, 6, 7], z: 30 },
//   d: { p: 7, q: 9, r: 10 },
//   e: 15
// }

console.log(deepMerge(obj1, obj2));
