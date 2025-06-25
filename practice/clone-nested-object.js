function cloneNestedProperty(obj, path) {
    let keys = path.split('.'), result = obj;

    for(let key of keys) {
        let val = result[key];        
        result = val
    }
    
    return result
}

const obj = { 
    a: { b: { c: 10, d: 20 }, e: 30 }, 
    f: 40 
};
const path = "a.b.c";
const clonedValue = cloneNestedProperty(obj, path);
console.log(clonedValue);  // Output: 10
