function merge(...sources) {
    let result = {};    

    for (const source of sources) {
        let keys = new Set([...Object.keys(result), ...Object.keys(source)]);
        for(let key of keys) {
            let val1 = source[key];
            let val2 = result[key];

            if(val1 && !val2) {
                result[key] = val1
            } else if(!val1 && val2) {
                result[key] = val2
            } else if(Array.isArray(val1) && Array.isArray(val2)) {
                result[key] = [...val2, ...val1]
            } else if(typeof val1 === "object" && typeof val2 === "object") {
                result[key] = merge(val2, val1)
            } else {
                result[key] = val2
            }
        }        
    }

    return result
}

const obj = { a: { b: 1 }, d: [1, 2] };
const src = { a: { c: 2 }, d: [3] };

console.log(merge(obj, src));
// { a: { b: 1, c: 2 }, d: [3] } ✅ deep merge
