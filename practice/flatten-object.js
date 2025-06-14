function flattenObject(obj, str) {

  const result = {};
  
  for(let key in obj) {
    const k = str ? `${str}.${key}` : key;    
    
    if(typeof obj[key] === 'object'&& obj[key] !== null) {
        const flatten = flattenObject(obj[key], k);
        //merging
        Object.assign(result, flatten);
        
    } else {
        result[k] = obj[key]
    }
  }

  return result;
}

console.log(flattenObject({ a: 1, b: { c: 2 } }, ''));
// { a: 1, "b.c": 2 }

console.log(flattenObject({ x: { y: { z: 3 } }, w: 4 }));
// // { "x.y.z": 3, w: 4 }

console.log(flattenObject({}));
// // {}

console.log(flattenObject({ a: { b: null }, c: 0 }));
// { "a.b": null, c: 0 }

