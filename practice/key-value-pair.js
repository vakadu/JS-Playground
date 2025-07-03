function keyValPair(obj, path) {
  let result = [];

  for (let key in obj) {
    let prefix = path ? `${path}.${key}` : key,
      value = obj[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      const temp = keyValPair(value, prefix);
      result = [...result, ...temp]      
    } else if(Array.isArray(value)) {
        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            const arrayPath = `${prefix}[${index}]`;            
            if(typeof element === "object" && element !== null) {
                result.push(...keyValPair(element, arrayPath))
            } else {
                result.push([arrayPath, element])
            }
        }
    } else if (
      typeof value === "boolean" ||
      typeof value === "number" ||
      typeof value === "string"
    ) {
      result.push([prefix, obj[key]]);
    }
  }

  return result;
}

// const obj = { a: 1, b: 2, c: 3 };
const obj = {
  a: 1,
  b: { c: 2, d: { e: 3, f: 4 } },
  g: [5, 6, { h: 7 }],
};
// [
//   ['a', 1],
//   ['b.c', 2],
//   ['b.d.e', 3],
//   ['b.d.f', 4],
//   ['g[0]', 5],
//   ['g[1]', 6],
//   ['g[2].h', 7]
// ]

console.log(keyValPair(obj, ""));
