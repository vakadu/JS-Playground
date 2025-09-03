function deepClone(value) {

    if(typeof value !== 'object') {
        return value
    }


    if(Array.isArray(value)) {
        return value.map((item) => deepClone(item))
    }

    let result = {};

    if(typeof value === 'object') {
        for (const key in value) {            
            result[key] = deepClone(value[key])
        }
    }    

    return result
}

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.



const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.
console.log(obj2, clonedObj2);
