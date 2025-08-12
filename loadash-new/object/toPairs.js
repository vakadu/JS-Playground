function toPairs(obj) {
    let result = []

    for (const key in obj) {
        if(obj.hasOwnProperty(key)) {
                    const element = obj[key];
                    result.push([key, element])
        }
    }

    return result
    
}

function Parent() {
  this.a = 1;
}
Parent.prototype.b = 2;

const obj = new Parent();

console.log(toPairs(obj));
// Expected: [ ['a', 1] ]

