function applyPatch(o, p) {
    for(let path in p) {
        setPath(o, p, path)
    }
}

function setPath(o, p, path) {
    let keys = path.split('.'), current = o;

    for(let i=0; i<keys.length; i++) {
        let key = keys[i];
        if(i === keys.length - 1) {
            current[key] = p[path]
        } else {
            if(!current[key]) {
                current[key] = {}
            }
            current = current[key]
        }
    }

    return o
}

const obj = {
  a: {
    b: {
      c: 1
    }
  },
  x: 10
};

const patch = {
  'a.b.c': 42,
  'x': 99,
  'a.b.d': 'new',
  'y.z': true
};

console.log(applyPatch(obj, patch));
