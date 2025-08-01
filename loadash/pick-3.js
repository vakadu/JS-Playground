function pick(obj, arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split('.'), tempObj = obj, tempResult = result;
        
        for (let j = 0; j < element.length; j++) {
            const insideElem = element[j];
            tempObj = tempObj[insideElem] 
            if(!tempResult[insideElem]) {
                tempResult[insideElem] = {}
            }
            tempResult = tempResult[insideElem]
        }

        // for (const key in obj) {
        //     if(element === key) {
        //         result[key] = obj[key]
        //     }
        // }
        
    }

    return result
}

// const obj1 = { a: 1, b: 2, c: 3 };
// const pickedObj1 = pick(obj1, ['a']);
// console.log(pickedObj1); // Expected: { a: 1 }

// const pickedObj2 = pick(obj1, ['b', 'c']);
// console.log(pickedObj2); // Expected: { b: 2, c: 3 }


// const obj2 = { x: 10, y: 20, z: 30 };
// const pickedObj3 = pick(obj2, ['a', 'b']);
// console.log(pickedObj3); // Expected: {} (No matching keys)

// const obj4 = { a: { b: 1, c: 2 }, d: 3 };
// const pickedObj5 = pick(obj4, ['a']);
// console.log(pickedObj5); // Expected: { a: { b: 1, c: 2 } }

// const pickedObj6 = pick(obj4, ['a', 'd']);
// console.log(pickedObj6); // Expected: { a: { b: 1, c: 2 }, d: 3 }

// const obj5 = { a: 1, b: 2, c: 3, d: 4 };
// const pickedObj7 = pick(obj5, ['a', 'd']);
// console.log(pickedObj7); // Expected: { a: 1, d: 4 }

// const obj7 = { a: { b: 1, c: 2 }, d: 3 };
// const pickedObj9 = pick(obj7, ['a']);
// console.log(pickedObj9); // Expected: { a: { b: 1, c: 2 } }

// const pickedObj10 = pick(obj7, ['a', 'd']);
// console.log(pickedObj10); // Expected: { a: { b: 1, c: 2 }, d: 3 }

// const obj8 = { a: 1, b: 'text', c: true, d: null };
// const pickedObj11 = pick(obj8, ['a', 'b']);
// console.log(pickedObj11); // Expected: { a: 1, b: 'text' }

// const pickedObj12 = pick(obj8, ['c', 'd']);
// console.log(pickedObj12); // Expected: { c: true, d: null }

// const obj9 = { a: [1, 2, 3], b: [4, 5] };
// const pickedObj13 = pick(obj9, ['a']);
// console.log(pickedObj13); // Expected: { a: [1, 2, 3] }

// const pickedObj14 = pick(obj9, ['b']);
// console.log(pickedObj14); // Expected: { b: [4, 5] }

const obj11 = { a: { b: 1, c: 2 }, d: 3 };
const pickedObj17 = pick(obj11, ['a.b', 'd']);
console.log(pickedObj17); // Expected: { a: { b: 1 }, d: 3 }
