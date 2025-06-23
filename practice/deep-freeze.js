function deepFreeze(obj) {
    if(!Object.isFrozen(obj)) {
        Object.freeze(obj)
    }
    Object.freeze(obj)
    for(let key in obj) {        
        if(obj[key] && typeof obj[key] !== 'object') {
            deepFreeze(obj[key])
        }        
    }

    return obj
}

// const obj = { a: 1, b: { x: 10, y: 20 } };

const obj1 = {
    a: 1,
    b: { x: 10, y: 20 },
    c: { z: { p: 30 } }
};

deepFreeze(obj1);

// Test modification attempts
obj1.a = 2; // Should not change
obj1.b.x = 15; // Should not change
obj1.c.z.p = 40; // Should not change

console.log(obj1);

