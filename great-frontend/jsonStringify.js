function jsonStringify(value) {
    let result = [];

    if(value === null) {
        return "null"
    }

    if(typeof value === "string") {
        return `"${value}"`
    }

    if(typeof value === "number" || typeof value === "boolean") {
        return String(value)
    }

    if(Array.isArray(value)) {
        return `[${value.map((item) => item)}]`
    }

    for (const key in value) {
        let k = `"${key}"`
        let v = jsonStringify(value[key]);            
        result.push(`${k}: ${v}`)    
    }


    return `'{${result.join(', ')}}'`
}

console.log(jsonStringify({ foo: "bar" })); // '{"foo":"bar"}'
console.log(jsonStringify({ foo: 'bar', bar: [1, 2, 3] })); // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: true, bar: false })); // '{"foo":true,"bar":false}'
console.log(jsonStringify(null));   // 'null'
console.log(jsonStringify(true));   // 'true'
console.log(jsonStringify(false));  // 'false'
console.log(jsonStringify(1));      // '1'
console.log(jsonStringify('foo'));  // '"foo"'
