function flatten(arr) {
    let result = []
    for(let a of arr) {
        if(Array.isArray(a)) {
            const r = flatten(a);
            result.push(...r)            
        } else {
            result.push(a)
        }
    }    
    return result
}

const array = [1, [2, [3, 4, [5]]]];
console.log(flatten(array));


