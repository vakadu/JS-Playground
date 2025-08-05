function difference(arr1, arr2) {

    let result = [], set = new Set(arr2);

    // for (const element of arr1) {
    //     if(!arr2.includes(element)) {
    //         result.push(element)
    //     }
    // }

    for (const element of arr1) {
        if(!set.has(element)) {
            result.push(element)
        }   
    }    

    return result
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = difference(array1, array2);

console.log(result); // Expected: [1, 2]
