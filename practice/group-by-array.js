function groupByArray(data, key) {
    let result = {};

    for(let item of data) {
        const path = getPath(item, key);
        if(!result[path]) {
            result[path] = []
        }
        result[path].push(item)
    }

    return result;
}

function getPath(obj, key) {
    let keys = key.split('.'), result = obj;

    for(let k of keys) {
        result = result[k] 
    }

    return result
}

const data = [
  { id: 1, user: { city: 'Bangalore' } },
  { id: 2, user: { city: 'Mumbai' } },
  { id: 3, user: { city: 'Bangalore' } },
  { id: 4, user: { city: 'Delhi' } },
  { id: 5, user: { city: 'Mumbai' } },
];

console.log(groupByArray(data, 'user.city'));

