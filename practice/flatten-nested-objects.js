function flattenObj(input, str) {
    let result = {};

    for(let key in input) {
        const value = input[key];
        const strKey = str ? `${str}.${key}` : key;

        if(typeof value === 'object' && value !== null) {
            const newResult = flattenObj(value, strKey);
            Object.assign(result, newResult)
        }

        if(typeof value !== 'object') {
            result[strKey] = value
        }
        
    }
    
    return result
}

const input = {
  a: {
    b: {
      c: 42
    },
    d: 99
  },
  e: 'hello'
};

console.log(flattenObj(input, ''));
