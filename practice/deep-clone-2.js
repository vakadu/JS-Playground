function deepClone(obj) {
  let result = {};

  for (let key in obj) {
    const value = obj[key];

    if (
      typeof value === "string" ||
      typeof value === "boolean" ||
      typeof value === "number"
    ) {
      result[key] = value;
    } else if (Array.isArray(value)) {
      result[key] = value.map((item) => deepClone(item));
    } else if (typeof value === "object" && !Array.isArray(value)) {
      result[key] = deepClone(value);
    }
    if (typeof value === "function") {
      result[key] = value;
    }
  }

  return result;
}

const obj = { a: 1, b: { x: 10, y: 20 }, c: [1, 2, 3] };
console.log(deepClone(obj));

// { a: 1, b: { x: 10, y: 20 }, c: [1, 2, 3] }
