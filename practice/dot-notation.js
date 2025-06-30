function flattenObject(obj, path) {
    let result = {};
    
    
    for (const key in obj) {
       const element = obj[key];
       const prefix = path ? `${path}.${key}`: key
       if(typeof element === 'object') {
        const temp  = flattenObject(element, prefix);
        Object.assign(result, temp)
        
       } else if(typeof element === "number" || typeof element === "string") {
        result[prefix] = element
       }
    }
    return result
}

const obj = { a: { b: { c: { d: 10 } } }, e: 20 };
// { 'a.b.c.d': 10, e: 20 }
console.log(flattenObject(obj, ''));

