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


