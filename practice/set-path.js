function setPath(o, path, val) {
    let keys = path.split('.'), result = o;

    for(let i=0; i<keys.length; i++) {  
            const key = keys[i];
      
        if(i === keys.length-1) {            
            result[key] = val
        }
        else {
            if(typeof result[key] !== 'object') {
            result[key] = {}

            }
        }
        result = result[key]
    }    
    console.log(o);
    
    return result
}

const obj = {};

setPath(obj, 'a.b.c', 42);
console.log(obj);

