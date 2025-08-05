function cloneDeepWith(obj, cb) {
  if (obj === null || typeof obj !== "object") {
    return cb(obj);
  }

  let result = Array.isArray(obj) ? [] : {};

  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      const element = obj[index];
      result[index] = cloneDeepWith(element, cb);
    }
  }

  if (typeof obj === "object") {
    for (const key in obj) {
      const element = obj[key];
      result[key] = cloneDeepWith(element, cb);
    }
  }

  return result;
}

const obj = { a: 1, b: { c: 2 } };
const customizer = (value) => {
  if (typeof value === "number") {
    return value * 2; // Double the numbers
  }
};
const deepClonedWithCustomizer = cloneDeepWith(obj, customizer);
console.log(deepClonedWithCustomizer); // Expected: { a: 2, b: { c: 4 } }
