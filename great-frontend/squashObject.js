function squashObject(obj, prefix = "") {
  let result = {};  

    for (const key in obj) {
      if(key === "") {
        continue
      }
      const element = obj[key];
      const myKey = prefix ? `${prefix}.${key}` : key;

      if(typeof element === "object") {
        const temp = squashObject(element, myKey);        
        Object.assign(result, temp)
      } else {
        result[myKey] = element
      }
    }

  return result;
}

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

console.log(squashObject(object)); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
