function chunkArray(arr, size) {
    let result = [], i=0;

    while(i<arr.length) {
        let temp = arr.slice(i, i+size);
        result.push(temp);
         i += size;
    }


    return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunkArray(arr, 3));
 // Expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
