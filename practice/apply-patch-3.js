function applyPatch(obj, patches) {
    for(let patch of patches) {
        for(let p in patch) {
            setPatch(obj, p, patch[p])
        }
    }
    return obj    
}

function setPatch(obj, patchKey, patchVal) {
    let result = obj, keys = patchKey.split('.');    
    
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (i === keys.length - 1) {
            result[key] = patchVal;
        } else {
            if (typeof result[key] !== 'object' || result[key] === null) {
                result[key] = {}; 
            }
            result = result[key]; 
        }
    }

    
    return result
}

const obj = { a: { b: { c: 10 }, d: 20 }, e: 30 };
const patches = [
  { 'a.b.c': 100, 'e': 200 },
  { 'a.d': 300, 'f': 400 }
];
// { a: { b: { c: 100 }, d: 300 }, e: 200, f: 400 }

console.log(applyPatch(obj, patches));

