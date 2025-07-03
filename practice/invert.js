function invertObject(obj) {
  const result = {};

  for (let key in obj) {
    const value = obj[key];

    if(Array.isArray(value)) {
      const keys = value.join(',');
      result[keys] = key
    } else {
      result[value] = key;
    }

  }

  return result;
}

const obj = { a: null, b: 1, c: undefined, d: 2 };


console.log(invertObject({ a: 1, b: 2 })); // { 1: 'a', 2: 'b' }
console.log(invertObject({ x: 'y', y: 'x' })); // { y: 'x', x: 'y' }
console.log(invertObject({ valid: true, nope: null })); // { true: 'valid' }
console.log(invertObject({ a: [1, 2], b: [3, 4], c: [5, 6] }))
console.log(invertObject(obj))