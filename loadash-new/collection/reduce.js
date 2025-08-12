function reduce(array, iteratee, accumulator) {
    // your code here

    let start = 0;

    if(!accumulator) {
        accumulator = array[0];
        start=1
    }

    for (let index = start; index < array.length; index++) {
        const element = array[index];
        accumulator = iteratee(accumulator, element)        
    }

    return accumulator;
}

console.log(reduce([1, 2, 3], (sum, n) => sum + n, 0)); 
// 6

console.log(reduce(['a', 'b', 'c'], (acc, val) => acc + val, '')); 
// 'abc'
