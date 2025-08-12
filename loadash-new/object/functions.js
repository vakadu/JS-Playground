function functions(object) {
    // your code here
    let result = [];
    for (const key in object) {
        const element = object[key];
        if(typeof element === "function") {
            result.push(key)
        }        
    }

    return result.sort()
}

const obj = Object.create({
  inheritedFn() {},
});
obj.z = 1;
obj.b = function() {};
obj.a = () => {};
Object.defineProperty(obj, 'hidden', { value: () => {}, enumerable: false });

console.log(functions(obj));
// Expected: ['a', 'b']  (only own enumerable function keys, sorted)

