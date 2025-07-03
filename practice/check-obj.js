function checkObj(obj) {
    let result = {};

    for(let key in obj) {
        let val = obj[key];

        if(val !== undefined && val !== null) {
            if(typeof val === 'object') {
                result[key] = checkObj(val)
        } else {
            result[key] = val
        }
        }

    }

    return result
}

const obj = { a: 1, b: null, c: { d: undefined, e: 2 }, f: 3 };
// { a: 1, c: { e: 2 }, f: 3 }
console.log(checkObj(obj));

