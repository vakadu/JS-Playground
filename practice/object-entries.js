Object.prototype.customEntries = function() {
    let result = [];

    for(let key in this) {
        if (this.hasOwnProperty(key)) {
        let value = this[key];
        let item = [key, value];
        result.push(item)
        }
    }
    console.log(result);
    

    return result
}

function customEntries(obj) {
    let result = [];

    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        let item = [key, value];
        result.push(item)
        }
    }

    return result
}

// const obj = { a: 1, b: 2 };// Output: [['a', 1], ['b', 2]]
const obj1 = { a: 'hello', b: 'world' };

const obj4 = { a: 'hello', b: [1, 2], c: true };
obj4.customEntries()
 // Output: [['a', 'hello'], ['b', [1, 2]], ['c', true]]

// console.log(customEntries(obj1));
// console.log(customEntries(obj4));

// const obj6 = { a: null, b: undefined };
// console.log(customEntries(obj6)); // Output: [['a', null], ['b', undefined]]

// const obj5 = Object.create({ d: 4 });
// obj5.a = 1;
// obj5.b = 2;
// console.log(customEntries(obj5)); // Output: [['a', 1], ['b', 2]]



