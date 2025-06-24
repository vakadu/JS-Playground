Array.prototype.customFlat = function(depth = 1) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        if(Array.isArray(this[i]) && depth > 0) {
            const temp = this[i].customFlat(depth-1);
            result.push(...temp)            
        } else {
             result.push(this[i])
        }
    }
    return result
}

// function helper(arr, depth) {
//     for(let i=0; i<depth; i++) {

//     }
// }

// function customFlat(arr, depth) {
//     let result = [];
//     for(let i=0; i<arr.length; i++) {
//         if(Array.isArray(arr[i]) && depth > 0) {
//             const temp = customFlat(arr[i], depth-1);
//             result.push(...temp)            
//         } else {
//             result.push(arr[i])
//         }
//     }    

//     return result
// }


const arr = [1, [2, 3, [4, 5]]];
// const arr2 = [1, [2, [3, [4, [5]]]]];

// // console.log(flat(arr));
// // console.log(arr.flat());
// console.log(customFlat(arr2, 3));
console.log(arr.customFlat(2));


