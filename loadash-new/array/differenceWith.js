function differenceWith(arr1, arr2, iterator) {
    let result = [], set = new Set(arr2);

    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        let isSame = false
       
        for (let j = 0; j < arr2.length; j++) {
            const element2 = arr2[j];
            
            if(iterator(element1, element2)) {
                isSame = true;
                 break
            }
        }

        if(!isSame) {
        result.push(element1)

        }
    }

    return result
}

const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];
const result = differenceWith(array1, array2, (a, b) => a === b);

console.log(result); // Expected: [1, 4]
