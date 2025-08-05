// Array Method: _.compact()
// Problem: Implement a custom version of _.compact() that removes all falsy values from an array (like false, null, undefined, 0, NaN, and '').

function compact(arr) {
    let result = [];

    // for (const element of arr) {
    //     if(element) {
    //         result.push(element)
    //     }
    // }

    // return result

    return arr.filter((item) => item)
}

const arr = [0, 1, false, 2, '', 3];
const compacted = compact(arr);
console.log(compacted); // Expected: [1, 2, 3]
