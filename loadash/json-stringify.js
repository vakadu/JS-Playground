function customStringify(obj) {

    if(typeof obj === "string") {
        return `"${obj}"`
    }

     if(typeof obj === "number" || typeof obj === "boolean") {
        return obj
    }

    let result = [];

    for(let key in obj) {
        let value = obj[key];
        if(typeof value === "object" && !Array.isArray(value)) {
            const temp = customStringify(value);
            result.push(`"${key}":${temp}`)
        } else if (Array.isArray(value)) {
            const tempValues = value.map(val => {
                if (typeof val === "string") {
                    return `"${val}"`;
                } else if (typeof val === "number" || typeof val === "boolean") {
                    return val;
                } else {
                    return `"${val}"`;
                }
            });
            result.push(`"${key}":[${tempValues.join(",")}]`);
        } else if(typeof value === "string") {
            result.push(`"${key}":"${value}"`)
        } else if(typeof value === "number" || typeof value === "boolean") {
            result.push(`"${key}":${value}`)
        }
    }

    return `{${result.join(',')}}`
}

const obj = { 
  name: 'Alice', 
  age: 30, 
  preferences: { color: 'blue', food: ['pizza', 'pasta'] }, 
  active: true 
};
// const obj = { a: 1, b: "hello", c: true };

const clonedObj = customStringify(obj);
console.log(clonedObj, typeof clonedObj);
console.log(JSON.stringify(obj), typeof JSON.stringify(obj));


// // function customStringify(value, seen = new Set()) {
//     // Handle null and primitives
//     if (value === null || typeof value !== 'object') {
//         return String(value);
//     }

//     // Handle Date objects
//     if (value instanceof Date) {
//         return `"${value.toISOString()}"`;  // Convert Date to ISO 8601 string
//     }

//     // Handle cyclic references
//     if (seen.has(value)) {
//         throw new TypeError('Converting circular structure to JSON');
//     }

//     // Handle arrays
//     if (Array.isArray(value)) {
//         seen.add(value);
//         const result = value.map(item => customStringify(item, seen));
//         seen.delete(value);
//         return `[${result.join(', ')}]`;
//     }

//     // Handle objects
//     seen.add(value);
//     const result = Object.keys(value).map(key => {
//         if (value.hasOwnProperty(key)) {
//             const keyString = `"${key}"`; // Add quotes to keys
//             const valueString = customStringify(value[key], seen);
//             return `${keyString}: ${valueString}`;
//         }
//         return null;
//     }).filter(item => item !== null);  // Filter out null (non-enumerable properties)

//     seen.delete(value);
//     return `{${result.join(', ')}}`;
// }
