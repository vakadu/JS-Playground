function getPath(obj, path) {
    let keys = path.split('.');
    let result = obj;

    for(let key of keys) {
        let val = result[key];        
        result = val
    }
    console.log(result);
    

    return result
}


const obj = {
  a: {
    b: {
      c: 42
    }
  }
};

getPath(obj, "a.b.c");        // → 42
// getPath(obj, "a.b");          // → { c: 42 }
// getPath(obj, "a.b.c.d");      // → undefined
// getPath(obj, "a.x.y.z");      // → undefined
// getPath(obj, "a");            // → { b: { c: 42 } }

