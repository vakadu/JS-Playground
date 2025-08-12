function get(object, path, defaultValue) {

    if(!object) {
        return defaultValue
    }

    let splitPaths = Array.isArray(path) ? path : path.split('.'), tempObj = object, result = defaultValue;

    debugger
    for (let index = 0; index < splitPaths.length; index++) {
        const element = splitPaths[index];                        

        if(index === splitPaths.length-1) {
            if(tempObj[element]) {
                result = tempObj[element]
            }
        } else if(element && element.includes('[') && element.includes(']')) {
            let key = element.split('[')[0];
            let value = element.split('[')[1].split([']'])[0];            
            tempObj = tempObj[key][value];
        } else {
            if(!tempObj[element]) {
                tempObj[element] = {}
            }
            tempObj = tempObj[element]
        }
    }

    return result
}

// const obj = { a: { b: { c: 3 } } };

// console.log(get(obj, 'a.b.c'));         // 3
// console.log(get(obj, ['a', 'b', 'c'])); // 3
// console.log(get(obj, 'a.b.x', 'default')); // 'default'
// console.log(get(null, 'a.b', 'default'));  // 'default'
// console.log(get(obj, 'a.b.c.d', 'default'));// 'default'

// Handles numeric keys
// const arrObj = { a: [{ b: 2 }] };
// console.log(get(arrObj, 'a[0].b'));      // 2
// console.log(get(arrObj, ['a', 0, 'b'])); // 2

const o = { a: { b: 0, c: false, d: '' } };
console.log(get(o, 'a.b', 'X')); // ❌ 'X' (should be 0)
console.log(get(o, 'a.c', 'X')); // ❌ 'X' (should be false)
console.log(get(o, 'a.d', 'X')); // ❌ 'X' (should be '')
