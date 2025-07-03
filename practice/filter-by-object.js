function filterByObject(obj, cb) {
  let result = {};

  for (const key in obj) {
    const element = obj[key];
    if (typeof element === "object" && !Array.isArray(element)) {
      const temp = filterByObject(element, cb);
      result[key] = temp;
    } else if (Array.isArray(element)) {
      const filteredArray = element.filter((item) => cb(key, item));
      if (filteredArray.length > 0) {
        result[key] = filteredArray;
      }
    } else {
      if (cb(key, element)) {
        result[key] = element;
      }
    }
  }

  return result;
}

// const obj = { a: 1, b: 2, c: 3 };
// const condition = (key, value) => value > 1;

// { b: 2, c: 3 }

const obj = {
  a: { b: { c: 10, d: 20 } },
  e: 30,
  f: { g: { h: 40 } },
};
const condition = (key, value) => value > 15;
// {
//   a: { b: { d: 20 } },
//   e: 30,
//   f: { g: { h: 40 } }
// }

console.log(filterByObject(obj, condition));
