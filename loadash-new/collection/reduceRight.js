function reduceRight(array, iteratee, accumulator) {
    // your code here
    let startIndex = array.length-1;
    if(!accumulator) {
        accumulator = array[array.length-1];
        startIndex--;
    }    
    
    for (let index = startIndex; index >= 0; index--) {
        const element = array[index];
        accumulator = iteratee(accumulator, element)
    }

    return accumulator
}

console.log(reduceRight(['a', 'b', 'c'], (acc, val) => acc + val, '')); 
// 'cba'
