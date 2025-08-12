function findKey(object, predicate) {
    const fn = toIteratee(predicate);

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if(fn(element)) {
                return key
            }
        }
    }
}

function toIteratee(predicate) {
    if(typeof predicate === "function") {
        return predicate
    }

    if(Array.isArray(predicate) && predicate.length === 2) {
        const [key, value] = predicate;

        return (obj) => obj?.[key] === value
    }

    if(typeof predicate === "object") {
        return (obj) => {
            for (const key in predicate) {
                if(predicate[key] !== obj) {
                    return false
                }
            }
            return true
        }
    }

    return (val) => val
}

console.log(findKey({ a: 1, b: 2, c: 3 }, o => o > 1)); 
// → 'b'

console.log(findKey({ a: { active: true }, b: { active: false } }, ['active', false]));
// → 'b'

console.log(findKey({ a: 1, b: '2', c: 3 }, { a: 1 })); 
// → 'b'
