function unflattenObject(obj) {
    let result = {}

    for(let flatKey in obj) {
        let keys = flatKey.split('.');
        let current = result
        for(let i=0; i<keys.length-1; i++) {
            let key = keys[i];

            if(!current[key]) {
                current[key] = {}
            }

            current = current[key]
        }
        current[keys[keys.length-1]] = obj[flatKey]        
    }
    console.log(result);
    

    return result
}

unflattenObject({ 'x.y': 1, 'x.z': 2 })
// { x: { y: 1, z: 2 } }

unflattenObject({ 'a': 1 })
// { a: 1 }

unflattenObject({ 'a.b.c': 1, 'a.b.d': 2 })
// { a: { b: { c: 1, d: 2 } } }

unflattenObject({})
// // {}

