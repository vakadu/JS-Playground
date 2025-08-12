function fromPairs(pairs) {
    // your code here
    let result = {};

    for (const [key, value] of pairs) {
        result[key] = value        
    }

    return result
}

console.log(fromPairs([['a', 1], ['b', 2]]));
// Expected: { a: 1, b: 2 }

console.log(fromPairs([]));
// Expected: {}
