function objectToQueryString(obj, prefix = '') {
    let result = '';

    for (const key in obj) {
        const value = obj[key];
        const queryKey = prefix ? `${prefix}[${key}]` : key;

        if (typeof value === 'object' && Array.isArray(value)) {
            result += `${queryKey}=${value.join(',')}&`;  // For arrays, join values with commas
        } else if (typeof value === 'object' && value !== null) {
            result += objectToQueryString(value, queryKey);  // Recursive call for nested objects
        } else {
            result += `${queryKey}=${value}&`;  // For primitive values
        }
    }

    return result.slice(0, -1);  // Remove the trailing '&'
}


const obj = { a: 10, b: 'test', c: [1, 2, 3] };
// "a=10&b=test&c[]=1&c[]=2&c[]=3"

console.log(objectToQueryString(obj));
