Array.prototype.customMap = function(cb) {
    let result = []
    for(let i=0; i<this.length; i++) {
        const temp = cb(this[i]);
        result.push(temp)
    }

    return result
}

const data = [1,2,345].customMap((i) => {
    return i*2
});

Array.prototype.customFilter = function(cb) {
    let result = []
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i)) {
            result.push(this[i])
        }
    }

    return result
}

const data1 = [18,35,24].customFilter((item, i) => {
    return item > 18
})
console.log(data1);


Array.prototype.customReduce = function(cb, initialValue) {
    let acc = initialValue;
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        acc = cb(acc, element, index)
    }
    return acc
}

const data2 = [18,35,24].customReduce((acc, curr, i) => {
    return acc+=curr
}, 0);
console.log(data2, "data2");


