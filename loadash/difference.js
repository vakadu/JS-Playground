function customDifference(arr1, ...arr2) {
    let result = []
  for (let index = 0; index < arr1.length; index++) {
    let element = arr1[index], present = false;

    for (const elem of arr2) {
        if(elem.includes(element)) {
            present = true;
            break;
        }        
    }

    if(!present) {
        result.push(element)
    }
    // const currIndex = arr1.indexOf(element);

    // if(currIndex !== -1) {
    //     const tempArr1 = arr1.slice(0, currIndex);
    //     const tempArr2 = arr1.slice(currIndex+1);
    //     arr1 = [...tempArr1, ...tempArr2]        
    // }
  }  

  return result;
}

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// console.log(customDifference(arr1, arr2));  // Output: [1, 2]
// // // Elements in arr1 but not in arr2: [1, 2]

// const arr1 = [1, 'a', true, { x: 10 }];
// const arr2 = [true, 'a'];
// console.log(customDifference(arr1, arr2));  // Output: [1, { x: 10 }]
// Elements in arr1 but not in arr2: [1, { x: 10}]

// const arr1 = [1, 2, 2, 3, 4];
// const arr2 = [2, 3];
// const arr3 = [3, 4];
// console.log(customDifference(arr1, arr2, arr3));  // Output: [1]
// Duplicates in arr1 are handled and removed

const arr1 = [1, [2, 3], 4];
const arr2 = [2, 3];
const arr3 = [4];
console.log(customDifference(arr1, arr2, arr3));  // Output: [1, [2, 3]]
// Arrays inside arr1 are treated as separate entities and not flattened

