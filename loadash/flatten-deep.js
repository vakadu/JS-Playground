function customFlattenDeep(arr, depth) {
    let result = [];

    for (const element of arr) {
        if(Array.isArray(element) && depth > 0) {
            result.push(...customFlattenDeep(element, depth - 1))
        } else {
            result.push(element);
        }
    }
    
    return result
}

// const arr = [1, [2, [3, [4]]]];
// console.log(customFlattenDeep(arr, 2));  // Output: [1, 2, 3, 4]

const arr = [[1], [[2], [[3]]]];
console.log(customFlattenDeep(arr, 3));  // Output: [1, 2, 3]

