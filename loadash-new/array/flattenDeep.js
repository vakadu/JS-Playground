function flattenDeep(array) {
    // your code here
    let result = [];

    for (const element of array) {
        if(Array.isArray(element)) {
            result = [...result, ...flattenDeep(element)]
        } else {
            result.push(element)
        }
    }

    return result
}

console.log(flattenDeep([1, [2, [3, [4]], 5]]));
// Expected: [1, 2, 3, 4, 5]

console.log(flattenDeep([[1, 2], [3, [4, [5]]]]));
// Expected: [1, 2, 3, 4, 5]

console.log(flattenDeep([1, [2, [3, [4, [5, [6]]]]]]));
// Expected: [1, 2, 3, 4, 5, 6]
