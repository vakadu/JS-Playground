function map(array, iteratee) {
    // your code here
    let result = [], cb;

    if(typeof iteratee === "function") {
        cb = iteratee
    } else if(typeof iteratee === "string") {
        cb = obj => obj?.[iteratee]
    } else {
        throw new Error("error")
    }
    

    for (const element of array) {
        result.push(cb(element))
    }

    return result
}

console.log(map([1, 2, 3], n => n * 2)); 
// [2, 4, 6]

console.log(map(['a', 'bb', 'ccc'], 'length')); 
// [1, 2, 3]
