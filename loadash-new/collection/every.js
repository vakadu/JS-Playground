function every(array, predicate) {
    // your code here

    for (const element of array) {
        if(!predicate(element)) {
            return false
        }
    }

    return true
}

console.log(every([2, 4, 6], n => n % 2 === 0)); 
// true

console.log(every([2, 3, 6], n => n % 2 === 0)); 
// false
