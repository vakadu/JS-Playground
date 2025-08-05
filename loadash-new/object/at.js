function at(obj, paths) {
  let result = [];

  for (const path of paths) {
    const splitPaths = path.split(".");
    let tempObj = obj, tempResult = result;
    
    for (let index = 0; index < splitPaths.length; index++) {
        const element = splitPaths[index];
        if(element.includes('[') && element.includes(']')) {
            let key = element.split('[')[0];
            let val = element.split(']')[0].split('[')[1];
            console.log(
             tempObj[key][val])

        } else if(index === splitPaths.length-1) {
            tempResult[element] = tempObj[element]
        } else {
            tempObj = tempObj[element];
            if(!tempResult[element]){
                tempResult[element] = {}
            }
            tempResult = tempResult[element]
        }
    }
  }

  return result;
}

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
console.log(at(object, ['a[0].b.c', 'a[1]']));


// const obj = { a: 1, b: 2, c: 3 };

// const result = at(obj, ['a', 'c']);
// console.log(result); // Expected: [1, 3]

// const obj = { a: { b: { c: 3 } }, d: 4 };

// const result = at(obj, ["a.b.c", "d"]);
// console.log(result); // Expected: [3, 4]

// const obj = { a: 1, b: { c: 2 } };

// const result = at(obj, ['a', 'b.c', 'd']);
// console.log(result); // Expected: [1, 2, undefined]

// const arr = [1, 2, 3, 4, 5];

// const result = at(arr, [0, 3, 4]);
// console.log(result); // Expected: [1, 4, 5]
