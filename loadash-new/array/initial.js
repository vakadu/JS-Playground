function initial(array) {
    // your code here

    return array.length > 1 ? array.slice(0, array.length-1) : []
}

console.log(initial([1, 2, 3]));  // Expected: [1, 2]
console.log(initial([1]));        // Expected: []
console.log(initial([]));         // Expected: []

