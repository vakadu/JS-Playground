function dropRight(arr, n=1) {
     if (n >= arr.length) {
        return [];
    }

    return arr.slice(0, arr.length - n);
}

const arr = [1, 2, 3, 4];
console.log(dropRight(arr)); // Expected: [1, 2, 3]
console.log(dropRight(arr, 2)); 
console.log(dropRight(arr, 5)); 