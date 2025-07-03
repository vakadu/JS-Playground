function customCloneDeep(obj) {
    let result = Array.isArray(obj) ? [] : {};
    let isArray = Array.isArray(obj);

    if(!isArray) {
            for(let key in obj) {
        const elem = obj[key];        

        if(typeof elem === "object" && !Array.isArray(elem) && elem !== null) {
            const temp = customCloneDeep(elem);
            result[key] = temp
        } else if(Array.isArray(elem) && elem !== null) {
            const tempArray = [...elem];
            result[key] = tempArray
        } else {
            result[key] = elem
        }
    }
    }

    if(isArray) {
        for (let index = 0; index < obj.length; index++) {
            const elem = obj[index];
            if(typeof elem === "object" && !Array.isArray(elem) && elem !== null) {
            const temp = customCloneDeep(elem);
            result.push(temp)
        } else if(Array.isArray(elem) && elem !== null) {
            const tempArray = [...elem];
            result.push(tempArray)
        } else {
            result.push(elem)
        }
        }
    }

    return result
}


// const obj = { a: { b: { c: 1 } } };
// const clonedObj = customCloneDeep(obj);
// console.log(clonedObj); // Output: { a: { b: { c: 1 } } }
// clonedObj.a.b.c = 2;
// console.log(obj.a.b.c); // Output: 1 (Original remains unaffected)


// const obj = { numbers: [1, 2, 3], letters: ['a', 'b', 'c'] };
// const clonedObj = customCloneDeep(obj);
// console.log(clonedObj); 
// // Output: { numbers: [1, 2, 3], letters: ['a', 'b', 'c'] }
// clonedObj.numbers[0] = 10;
// console.log(obj.numbers[0]); // Output: 1 (Original remains unaffected)

const arr = [[1, 2], [3, 4]];
const clonedArr = customCloneDeep(arr);
console.log(clonedArr); 
// Output: [[1, 2], [3, 4]]
clonedArr[0][0] = 10;
console.log(arr[0][0]); // Output: 1 (Original remains unaffected)

// const obj = { 
//   name: 'Alice', 
//   age: 30, 
//   preferences: { color: 'blue', food: ['pizza', 'pasta'] }, 
//   active: true 
// };
// const clonedObj = customCloneDeep(obj);
// console.log(clonedObj);
// // Output: { 
// //   name: 'Alice', 
// //   age: 30, 
// //   preferences: { color: 'blue', food: ['pizza', 'pasta'] },
// //   active: true 
// // }
// clonedObj.preferences.food[0] = 'burger';
// console.log(obj.preferences.food[0]); // Output: 'pizza' (Original remains unaffected)

// const obj = { a: null, b: undefined };
// const clonedObj = customCloneDeep(obj);
// console.log(clonedObj); 
// Output: { a: null, b: undefined }
