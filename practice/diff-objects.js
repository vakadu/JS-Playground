function diffObjects(o1, o2) {
    let result = {};
    const keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);    

    for(let key of keys) {
        let val1 = o1[key];
        let val2 = o2[key];

        if(typeof val1 !== 'object' && typeof val2 !== 'object') {
            if(val1 !== val2) {
                result[key] = {from: val1, to: val2}
            }
        } else if(typeof val1 === 'object' && typeof val2 === 'object') {
            const newResult = diffObjects(val1, val2);
            if(Object.keys(newResult).length > 0) {
                result[key] = newResult
            }
        } else if(val1 !== val2) {
            result[key] = {from: val1, to: val2}
        }
    }
    

    // for(let key in o1) {
    //     if(typeof o1[key] === 'object') {
    //         const flat = diffObjects(o1[key], o2[key], key);
    //         Object.assign(result, {[key]: flat})
    //     }        
        
    //     if(typeof o1[key] !== 'object') {
    //         if(typeof o1[key] === typeof o2[key] && o1[key] !== o2[key]) {
    //             result[key] = {from: o1[key], to: o2[key]}
    //         }
    //     }
    // }    

    // let keys1 = Object.keys(o1);
    // let keys2 = Object.keys(o2);

    // if(keys1.length !== keys2.length) {
    //     if(keys1.length > keys2.length) {
    //         for(let i=keys2.length; i<keys1.length; i++) {
    //             result[keys1[i]] = {from:undefined, to: o1[keys1[i]]}          
    //         }
    //     }

    //     if(keys2.length > keys1.length) {
    //         for(let i=keys1.length; i<keys2.length; i++) {
    //             result[keys2[i]] = {from:undefined, to: o2[keys2[i]]}          
    //         }
    //     }
        
    // }
    console.log(result);
    

    return result
}

const obj1 = {
  name: "Alice",
  age: 25,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const obj2 = {
  name: "Alice",
  age: 26,
  address: {
    city: "Mumbai",
    pin: 560001
  },
  active: true
};
diffObjects(obj1, obj2)

diffObjects({ a: 1 }, { a: 2 }) 
// // => { a: { from: 1, to: 2 } }

diffObjects({ x: 5 }, { x: 5 }) 
// // => {}

diffObjects({ a: 1 }, { b: 2 }) 
// // => { a: { from: 1, to: undefined }, b: { from: undefined, to: 2 } }

diffObjects({ a: { b: 1 } }, { a: { b: 2 } }) 
// // => { a: { b: { from: 1, to: 2 } } }

