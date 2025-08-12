function gt(a, b) {
    // Ensure both values are numbers or can be coerced to numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false; // Return false if either value is not a number
    }
    
    return a > b;
}


// console.log(gt(4, 3));  // Expected: true
// console.log(gt(2, 3));  // Expected: false


console.log(gt('apple', 'banana'));  // Expected: false
console.log(gt('grape', 'banana'));  // Expected: true
