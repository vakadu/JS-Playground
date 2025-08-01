function cloneDeep(obj, seen = new WeakMap()) {
    // Return primitives as-is
    if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean" || obj === null) {
        return obj;
    }

    // Check for circular references using a WeakMap
    if (seen.has(obj)) {
        return seen.get(obj); // Return the reference if it was already cloned
    }

    let result = Array.isArray(obj) ? [] : {};

    // Store the reference to handle circular references
    seen.set(obj, result);

    // If it's an array, recursively clone each item
    if (Array.isArray(obj)) {
        for (let index = 0; index < obj.length; index++) {
            result[index] = cloneDeep(obj[index], seen);
        }
    }

    // If it's an object, recursively clone each property
    else if (typeof obj === "object") {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = cloneDeep(obj[key], seen);
            }
        }
    }

    return result;
}
