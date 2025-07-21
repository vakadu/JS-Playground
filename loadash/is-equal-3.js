function isEqual(o1, o2, visited = new WeakMap()) {
    // Handle same reference or primitive comparison (including null)
    if(o1 === o2) {
        return true;
    }

    // If either of them is null or undefined, they're only equal if both are null/undefined
    if(o1 == null || o2 == null) {
        return false;
    }

    // Handle Date comparison by comparing the timestamp (getTime())
    if(o1 instanceof Date && o2 instanceof Date) {
        return o1.getTime() === o2.getTime();
    }

    // Handle Array comparison
    if(Array.isArray(o1) && Array.isArray(o2)) {
        if(o1.length !== o2.length) {
            return false;
        }

        for (let index = 0; index < o1.length; index++) {
            if(!isEqual(o1[index], o2[index], visited)) {
                return false;
            }
        }
        return true;
    }

    // Handle Object comparison
    if(typeof o1 === 'object' && typeof o2 === 'object') {
        // Check if circular references are encountered
        if (visited.has(o1) && visited.get(o1) === o2) {
            return true; // Avoid infinite loop in case of circular references
        }

        // Mark the current pair as visited
        visited.set(o1, o2);
        visited.set(o2, o1);

        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);

        // If the objects have different numbers of keys, they are not equal
        if(keys1.length !== keys2.length) {
            return false;
        }

        // Recursively compare each key in the objects
        for (const key of keys1) {
            if (!keys2.includes(key) || !isEqual(o1[key], o2[key], visited)) {
                return false;
            }
        }

        return true;
    }

    // If o1 and o2 are of different types or any other edge case
    return false;
}
