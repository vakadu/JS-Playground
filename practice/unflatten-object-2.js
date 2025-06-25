function unFlatten(obj) {
    let result = {};

    for(let key in obj) {
        setPath(key, obj[key], result)
    }

    return result
}

function setPath(k, v, o) {
    let keys = k.split('.'), result = o;

    for(let i=0; i<keys.length; i++) {
        let key = keys[i];
        
        if(i === keys.length-1) {
            result[key] = v;
        } else {
            if(typeof result[key] !== 'object') {
                result[key] = {}
            }
        }
        result = result[key]
    }

    return result
}

const obj = { 'a.b.c': 10, 'a.b.d': 20, 'a.e': 30, f: 40 };
// { a: { b: { c: 10, d: 20 }, e: 30 }, f: 40 }

console.log(unFlatten(obj));

