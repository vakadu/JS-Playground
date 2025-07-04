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


