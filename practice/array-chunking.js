function arrayChunks(arr, chunk) {
    let result = [], temp = [];

    // for(let i=0; i<arr.length; i++) {
    //     temp.push(arr[i]);

    //     if(temp.length === chunk) {
    //         result.push(temp);
    //         temp = [];
    //     }
    // }

    // if(temp.length) {
    //     result.push(temp)
    // }

    // return result

    for(let i=0; i<arr.length; i+=chunk) {
        const slice = arr.slice(i, i + chunk);
        result.push(slice)        
    }
    return result
}

console.log(arrayChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

