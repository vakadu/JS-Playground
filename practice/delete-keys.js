function removePropertiesByPath(obj, paths) {
    let result = JSON.parse(JSON.stringify(obj));

    for(let path of paths) {
        deletePath(path, result)
    }    

    return result
}

function deletePath(path, o) {
    let key=path.split('.'), result = o;

    for (let index = 0; index < key.length; index++) {
        const element = key[index];

        if (!result[element]) return;

        if(index === key.length-1) {
            delete result[element]
        } else {
            result = result[element]
        }
    }

    return result;
}

// const obj = { a: { b: { c: 10, d: 20 }, e: 30 }, f: 40 };
// const paths = ['a.b.c', 'a.e'];
// { a: { b: { d: 20 }, e: 30 }, f: 40 }


const obj = { a: { b: { c: 10 }, d: 20 }, e: 30 };
const paths = ['a.b.c', 'a.d', 'e'];


console.log(removePropertiesByPath(obj, paths));

