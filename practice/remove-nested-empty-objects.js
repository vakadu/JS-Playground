function removeNestedEmpty(object) {
    let result = {...object}
    for (const key in object) {
        const elemnt = object[key]
        if(typeof elemnt === 'object' && Object.keys(elemnt) <= 0) {
            delete result[key]
        } else {
            const nested = removeNestedEmpty(elemnt);
            if(typeof nested === 'object'&& Object.keys(elemnt) <= 0) {
                 delete result[key]
            }            
        }
    }
    return result    
}

const obj = { a: {}, b: { c: 10 }, d: {}, e: { f: {} } };
// { b: { c: 10 } }

console.log(removeNestedEmpty(obj));

