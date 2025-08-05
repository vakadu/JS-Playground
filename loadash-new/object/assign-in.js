function assignIn(o1, o2) {
    let result = {...o1}
    
    for (const key in o2) {
        console.log(key);
        result[key] = o2[key]
    }

    return result
}

function Parent() { this.a = 1; }
Parent.prototype.b = 2;

const obj = new Parent();
const newObj = assignIn({}, obj);
console.log(newObj); // { a: 1, b: 2 }
