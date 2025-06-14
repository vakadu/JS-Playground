function unFlatten(input) {
    let result = {};

    for(let key in input) {
        let keys = key.split('.'), current = result;        
        for(let i=0; i<keys.length; i++) {
            let objKey = keys[i];
            if(i === keys.length - 1) {
                current[objKey] = input[key]
            } else {
                if(typeof current[objKey] !== 'object') {
                    current[objKey] = {}
                }
                current = current[objKey]                
            }            
        }
    }

    return result

}

const input = {
  'a.b.c': 42,
//   'a.d': 99,
//   'e': 'hello'
};


console.log(unFlatten(input));

