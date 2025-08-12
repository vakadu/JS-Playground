function intersection(...arrays) {
  // your code here
  
  // for (let i = 0; i < arrays[0].length; i++) {
  //   let currElem = arrays[0][i];    
  //   for (let j = 1; j < arrays.length; j++) {
  //       const element = arrays[j][i];        
  //       if(currElem === element) {
  //           return [currElem]
  //       }
  //   }
  // }

  // return []

  let result = [];
  let [first, ...rest] = arrays;

  for (const element of first) {    
    if(rest.every((item) => item.includes(element)) && !result.includes(element)) {
      result.push(element)
    }
  }
  

  return result
}

console.log(intersection([2, 1], [2, 3]));
// Expected: [2]

console.log(intersection([1, 2, 2, 3], [2, 2], [2]));
// // Expected: [2]

console.log(intersection([NaN, 1, 2], [NaN, 2], [3, NaN]));
// // Expected: [NaN]

console.log(intersection([], [1,2,3]));
Expected: []

