function customOmit(o, p) {
  let result = JSON.parse(JSON.stringify(o));

  for (let path of p) {
    let keys = path.split("."), tempObj = result;
    
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        
        if(element.includes('[') && element.includes(']')) {
            const value = element.split('[')[0];
            const index = parseInt(element.split('[')[1].split(']')[0], 10);
            tempObj[value] = [...tempObj[value].slice(0, index), ...tempObj[value].slice(index+1)]
        } else {
            if(index === keys.length - 1) {
                delete tempObj[element]
            } else {
                tempObj = tempObj[element]
            }
        }
    }
  }

  return result;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(customOmit(obj, ['a']));      // Output: { b: 2, c: 3 }
console.log(customOmit(obj, ["b", "c"])); // Output: { a: 1 }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(customOmit(obj, ['d']));      // Output: { a: 1, b: 2, c: 3 }
// console.log(customOmit(obj, ['a', 'e'])); // Output: { b: 2, c: 3 }

// const obj = { a: 1, b: { x: 10, y: 20 }, c: 3 };
// // console.log(customOmit(obj, ['b']));        // Output: { a: 1, c: 3 }
// console.log(customOmit(obj, ['b.x']));      // Output: { a: 1, b: { y: 20 }, c: 3 }

// const obj = { a: { b: { c: 3 } } };
// console.log(customOmit(obj, ['a.b.c']));   // Output: { a: { b: {} } }
// console.log(customOmit(obj, ['a']));       // Output: {}


// const obj = { a: { b: { c: 1 } }, b: { x: 10 }, c: 3 };
// console.log(customOmit(obj, ['a.b.c', 'b'])); // Output: { a: { b: {} }, c: 3 }

// const obj = { a: [1, 2, 3], b: 2 };
// console.log(customOmit(obj, ['a[0]']));    // Output: { a: [2, 3], b: 2 }
// console.log(customOmit(obj, ['a[1]']));    // Output: { a: [1, 3], b: 2 }
