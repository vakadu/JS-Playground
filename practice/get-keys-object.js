function getKeysObject(object) {
    let result = [];
  for (const key in object) {
    const element = object[key];
    if(typeof element === 'object' && element !== null) {
            const nestedKeys = getKeysObject(element);
        result.push(key,...nestedKeys)
    } else {
        result.push(key)
    }
  }

  return result
}

const obj = { a: { b: { c: 10 }, d: 20 }, e: 30, f: 40 };
// ["a", "b", "c", "d", "e", "f"]

console.log(getKeysObject(obj));
