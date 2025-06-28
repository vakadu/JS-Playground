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


Array.prototype.customFind = function(cb) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if(cb(element, index)) {
            return element
        }
    }
}
const d3 = [18,35,24].customFind((it)=>{
    return it>18
})

const d4 = [1, 3, 5, 6, 7].customFind((it) => {
    return it % 2 === 0;
});
console.log(d4); // Output: 6

const arr = ['apple', 'banana', 'cherry'];
const found = arr.customFind((str) => {
    return str.startsWith('b');
});
console.log(found); // Output: 'banana'

const arr2 = [5, 10, 15];
const foundNone = arr2.customFind((num) => num > 20);
console.log(foundNone); // Output: undefined


// console.log(d3, "d3");

Array.prototype.customSome = function(cb) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if(cb(element)) {
            return true
        }
    }
            return false
}

const someNums = [5, 10, 15].customSome((item) => {
    return item>10
});
console.log(someNums);


Array.prototype.customEvery = function(cb) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if(!cb(element)) {
            return false
        }
    }
    return true
}

Array.prototype.customReduceRight = function(cb, initialValue) {
    let acc = initialValue;
    for (let index = this.length-1; index >=0; index--) {
        const element = this[index];
        acc = cb(acc, element, index)
    }

    return acc
}

const d8 = [12,3,4].customReduceRight(function(acc, curr, i) {

}, 0)
