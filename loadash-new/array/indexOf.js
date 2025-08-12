function indexOf(array, value, fromIndex = 0) {
    // your code here

    if (fromIndex < 0) {
        fromIndex = Math.max(array.length + fromIndex, 0);
    }

    for (let index = fromIndex; index < array.length; index++) {
        const element = array[index];
        if(element === value) {
            return index
        }
    }

    return -1;
}

console.log(indexOf([1, 2, 1, 2], 2));           // Expected: 1
console.log(indexOf([1, 2, 1, 2], 2, 2));        // Expected: 3
console.log(indexOf([NaN, 2, NaN], NaN));        // Expected: 0  (NaN matches NaN)
console.log(indexOf([1, 2, 3], 4));              // Expected: -1
console.log(indexOf([1, 2, 3, 2], 2, -2)); //3
