function customFlattenDeep(arr) {
    let result = [];

    for (const element of arr) {
        if(Array.isArray(element)) {
            result.push(...customFlattenDeep(element))
        } else {
            result.push(element);
        }
    }
    
    return result
}

const arr = [1, [2, [3, [4]]]];
console.log(customFlattenDeep(arr));  // Output: [1, 2, 3, 4]

