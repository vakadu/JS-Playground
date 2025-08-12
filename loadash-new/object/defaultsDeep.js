function defaultsDeep(obj, ...defaults) {
    let result = { ...obj }; // Start with a shallow copy of the obj

    // Iterate through each defaults object
    for (const defaultObj of defaults) {
        for (const key in defaultObj) {
            if (defaultObj.hasOwnProperty(key)) {
                const defaultValue = defaultObj[key];

                // If the value is an object, recursively merge the defaults
                if (typeof defaultValue === 'object' && defaultValue !== null && !Array.isArray(defaultValue)) {
                    // If the result doesn't have the property, set it to a default object
                    if (result[key] === undefined) {
                        result[key] = defaultsDeep({}, defaultValue);
                    } else {
                        result[key] = defaultsDeep(result[key], defaultValue);
                    }
                } else {
                    // For non-object values, apply default if not already set
                    if (result[key] === undefined) {
                        result[key] = defaultValue;
                    }
                }
            }
        }
    }

    return result;
}


const obj = { a: 1, b: { x: 2 } };
const defaultObj = { a: 2, b: { x: 3, y: 4 }, c: 5 };

const result = defaultsDeep(obj, defaultObj);
console.log(result); // Expected: { a: 1, b: { x: 2, y: 4 }, c: 5 }
