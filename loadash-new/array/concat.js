function concat(arr1, ...arr2) {
    let result = [...arr1];

    for (let index = 0; index < arr2.length; index++) {
        const element = arr2[index];
        if(Array.isArray(element)) {
            result.push(...element)
        } else {
            result.push(element)
        }
        
    }

    // for (const element of arr2) {
        // if(Array.isArray(element)) {
        //     concat(result, element)
        // } else {
        //     result.push(element)
        // }
    // }

    return result
}

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const concatenated = concat(arr1, arr2);
// console.log(concatenated); // Expected: [1, 2, 3, 4]

const arr1 = [1, 2];
const result = concat(arr1, [3, 4], 5);
console.log(result); // Expected: [1, 2, 3, 4, 5]

console.log(concat([1], 2, [3], [[4]])); 
// Expected: [1, 2, 3, [4]]
