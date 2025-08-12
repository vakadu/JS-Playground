function find(array, predicate) {
    for (const element of array) {
        if(predicate(element)) {
            return element
        }
    }

    return undefined
}

console.log(find([1, 3, 5, 8], n => n % 2 === 0)); // 8
console.log(find([1, 3, 5], n => n % 2 === 0));    // undefined
console.log(find([], n => n > 0));                 // undefined
