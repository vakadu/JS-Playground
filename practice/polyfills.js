String.prototype.customIncludes = function (target) {
    for (let index = 0; index < this.length; index++) {
        const tempSlice = this.slice(index, target.length+index);
        if (tempSlice === target) {
            return true;
        }
    }
    return false
}

// const str = 'Hello, world!';
// console.log(str.customIncludes('world'));
// console.log(str.customIncludes('foo'));

// str.customIncludes('foo')
// console.log(customIncludes(str, 'world')); // Output: true
// console.log(customIncludes(str, 'foo')); // Output: false

Object.prototype.customKeys = function() {
    let result = [];    

    for (const key in this) {
        if(this.hasOwnProperty(key))        
        result.push(key)
    }
    
    return result
}

const obj = { a: 1, b: 2, c: 3 };
console.log(obj.customKeys()); // Output: ['a', 'b', 'c']

