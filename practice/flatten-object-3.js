function flattenObject(obj, path) {
    let result = {}

    for(let key in obj) {
        let prefix = path ? `${path}.${key}` : key;
        let value = obj[key]

        if(typeof value === "object") {
            const r = flattenObject(value, prefix);
            Object.assign(result, r)
        } else {
            result[prefix] = value
        }
    }

    return result
}

const obj = { a: { b: { c: 10, d: 20 }, e: 30 }, f: 40 };
// { 'a.b.c': 10, 'a.b.d': 20, 'a.e': 30, f: 40 }

console.log(flattenObject(obj, ''));

