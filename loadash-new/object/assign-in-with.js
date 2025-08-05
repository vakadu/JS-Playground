function assignInWith(o1, o2, cb) {
    let result = {...o1}

    for (const key in o2) {
        const element = o2[key];
        result[key] = cb(element, o1[key])
    }

    return result

}

function customizer(objValue, srcValue) {
  return objValue === undefined ? srcValue : objValue;
}

const obj1 = { a: 1, b: undefined };
const obj2 = { b: 2, c: 3 };

const newObj = assignInWith(obj1, obj2, customizer);
console.log(newObj); // { a: 1, b: 2, c: 3 }
