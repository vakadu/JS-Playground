function groupby(arr, key) {
    // let result = {};

    // for(let k of arr) {
    //     let value = k[key];
    //     if(!result[value]) {
    //         result[value] = [k]
    //     } else {
    //         result[value].push(k)
    //     }
    // }
    
    // return result    

    return arr.reduce((acc, curr) => {
        let value = curr[key];
        if(!acc[value]) {
            acc[value] = [curr]
        } else {
            acc[value].push(curr)
        }

        return acc;
    }, {})
}

const arr = [
  { id: 1, category: 'A', value: 10 },
  { id: 2, category: 'B', value: 20 },
  { id: 3, category: 'A', value: 30 },
  { id: 4, category: 'C', value: 40 }
];
const key = 'category';

console.log(groupby(arr, key));

