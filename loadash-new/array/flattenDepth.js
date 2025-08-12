function flattenDepth(array, depth = 1) {
    // your code here
    let result = [];

    for (const element of array) {        
        if(Array.isArray(element) && depth > 0) {
            result = [...result, ...flattenDepth(element, depth-1)]
        } else {
            result.push(element)
        }
    }

    return result
}

console.log(flattenDepth([1, [2, [3, [4]], 5]], 1));
// Expected: [1, 2, [3, [4]], 5]

console.log(flattenDepth([1, [2, [3, [4]], 5]], 2));
// Expected: [1, 2, 3, [4], 5]

console.log(flattenDepth([1, [2, [3, [4, [5]]]]], 3));
// Expected: [1, 2, 3, 4, [5]]

console.log(flattenDepth([[1, 2], [3, [4, [5]]]], 1));
// Expected: [1, 2, 3, [4, [5]]]
