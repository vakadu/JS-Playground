function getAllPaths(obj, str) {
  let result = [];

  for (let key in obj) {
    let value = obj[key];
    let prefix = str ? `${str}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      const newData = getAllPaths(value, prefix);
      result.push(...newData);
    } else if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      result.push(prefix);
    }
  }

  return result;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: {
    g: "hello",
  },
};

console.log(getAllPaths(obj, ""));
