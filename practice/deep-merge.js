function deepMerge(o1, o2, str = "") {
  let keys = new Set([...Object.keys(o1), ...Object.keys(o2)]),
    result = {};

  for (let key of keys) {
    let value1 = o1[key];
    let value2 = o2[key];

    if (value1 && !value2) {
      result[key] = value1;
    }

    if (!value1 && value2) {
      result[key] = value2;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
      result[key] = value2;
    }

    if (
      (typeof value1 === "string" || typeof value1 === "number") &&
      (typeof value2 === "string" || typeof value2 === "number")
    ) {
      result[key] = value2;
    }

    if (
      typeof value1 === "object" &&
      !Array.isArray(value1) &&
      typeof value2 === "object" &&
      !Array.isArray(value2)
    ) {
      const newResult = deepMerge(value1, value2, key);
      result[key] = newResult;
    }
  }

  return result;
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 3 };

// const obj1 = { a: { x: 1, y: 2 }, b: 3 };
// const obj2 = { a: { z: 4 }, c: 5 };

// const obj1 = { a: 1, b: 2, c: { d: 3 } };
// const obj2 = { b: 4, c: { e: 5 } };

// const obj1 = { a: 1, b: 2 };
// const obj2 = { x: 3, y: 4 };

// const obj1 = {};
// const obj2 = { a: 1 };

// const obj1 = { a: [1, 2], b: 3 };
// const obj2 = { a: [3, 4], b: 5 };

// const obj1 = { a: { b: [1, 2], c: 3 } };
// const obj2 = { a: { b: [4, 5], d: 6 } };

// const obj1 = { a: [1, 2], b: [3, 4] };
// const obj2 = { a: [5, 6], b: [7, 8] };

const obj1 = { a: () => 'hello', b: 2 };
const obj2 = { a: () => 'world', c: 3 };


console.log(deepMerge(obj1, obj2));

// { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
