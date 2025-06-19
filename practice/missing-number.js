function missingNumber(arr) {
    arr.sort((a,b) => a-b);
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1) {
            return i+1
        }        
    }

    return Math.max(...arr)+1
}

// console.log(missingNumber([3, 7, 1, 2, 8, 4, 5]));
// const arr = [10, 9, 8, 6, 7, 5, 4, 2, 1];
// const arr = [1,3];
const arr = [2, 3, 1];


console.log(missingNumber(arr));
