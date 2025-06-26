function applyPatch(obj, patch) {
    let result = obj;
    for(let key in patch) {
        getPath(result, key, patch[key])
    }

    return result
}

function getPath(obj, patch, value) {
    let result = obj, keys = patch.split('.');

    for(let i=0; i<keys.length; i++){
        let key = keys[i]
        if(i === keys.length-1){
            result[key] = value
        } else {
            if(!result[key]) {
                result[key] = {}
            }
            result = result[key]
        }
    }

    return result
}

const obj = { a: { b: { c: 10, d: 20 }, e: 30 }, f: 40 };
const patch = { 'a.b.c': 100, 'a.e': 300 };

// { a: { b: { c: 100, d: 20 }, e: 300 }, f: 40 }

console.log(applyPatch(obj, patch));


