function chunk(arr, k) {
    let result = [], i=0;
    
    while(i<arr.length) {
        const temp = arr.slice(i, i+k);
        result.push(temp)
        i+=k;
    }

    //  for (let i = 0; i < arr.length; i += size) {
    //     result.push(arr.slice(i, i + size));
    // }

    return result
}

const arr = [1, 2, 3, 4, 5, 6];
const chunkedArr = chunk(arr, 2);
console.log(chunkedArr); // Expected: [[1, 2], [3, 4], [5, 6]]
