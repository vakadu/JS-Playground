function invertObject(obj) {
  const result = {};

  for (let key in obj) {
    const value = obj[key];

    // Only allow string, number, boolean
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      result[value] = key;
    }
  }

  return result;
}


console.log(invertObject({ a: 1, b: 2 })); // { 1: 'a', 2: 'b' }
console.log(invertObject({ x: 'y', y: 'x' })); // { y: 'x', x: 'y' }
console.log(invertObject({ valid: true, nope: null })); // { true: 'valid' }
