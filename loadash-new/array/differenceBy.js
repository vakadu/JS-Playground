function differenceBy(arr1, arr2, key) {
    let result = [], set = new Set();

    for (const element of arr2) {
        let val = element[key];
        set.add(val)
    }

    for (const element of arr1) {
        let val = element[key];
        if(!set.has(val)) {
            result.push(element)
        }
    }

    return result
}

// const array1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const array2 = [{ x: 3 }, { x: 4 }];
// const result = differenceBy(array1, array2, 'x');

// console.log(result); // Expected: [{ x: 1 }, { x: 2 }]

// const arr1 = [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }];
// const arr2 = [{ x: 3, y: 30 }, { x: 4, y: 40 }];
// const result = differenceBy(arr1, arr2, 'x');

// console.log(result); // Expected: [{ x: 1, y: 10 }, { x: 2, y: 20 }]

const array1 = [2.1, 2.2, 3.1];
const array2 = [3.2, 3.3];
const result = differenceBy(array1, array2, Math.floor);

console.log(result); // Expected: [2.1, 2.2]
