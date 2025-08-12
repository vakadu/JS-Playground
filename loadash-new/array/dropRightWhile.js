function dropRightWhile(arr, cb) {
    let result = [];

    for (const element of arr) {
        if(!cb(element)) {
            result.push(element)
        }
    }

    return result
}

// const arr = [1, 2, 3, 4, 5];
// console.log(dropRightWhile(arr, (n) => n > 3)); // Expected: [1, 2, 3]

const arr = ['apple', 'banana', 'cherry', 'date'];
console.log(dropRightWhile(arr, (item) => item.length > 5)); // Expected: ['apple', 'banana']
