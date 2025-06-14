function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj
    }

    let result = Array.isArray(obj) ? [] : {};
    let isArry = Array.isArray(obj);

    if(isArry) {
         for(let key of obj) {
            result.push(deepClone(key))
            // if(!Array.isArray(key) && typeof key === 'object') {
            //     const o = deepClone(key);
            //     result.push(o)                
            // } else {
            //     result.push(key)
            // }
        }
    };

    if(!isArry) {
        for(let key in obj) {
            result[key] = deepClone(obj[key])
        }
    }
    

    return result

}

console.log(deepClone({ a: 1, b: { c: 2 } }));
console.log(deepClone([1, { a: 2 }, [3, 4]]));

// { a: 1, b: { c: 2 } }


// // [1, { a: 2 }, [3, 4]]

// deepClone(null)
// null

