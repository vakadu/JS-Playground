function some(array, predicate) {
    // your code here
    for (const element of array) {
        if(predicate(element)) {
            return true
        }
    }

    return false
}

console.log(some([1, 3, 5], n => n % 2 === 0)); 
// false

console.log(some([1, 2, 3], n => n % 2 === 0)); 
// true
