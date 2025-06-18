function flattenObject(nestedObject, str = '') {
    let result = {}
    for(let key in nestedObject) {
        const value = nestedObject[key];
        const prefix = str ? `${str}.${key}` : key;        

        if(typeof value === 'object') {
            const newObj = flattenObject(value, prefix);
            // Object.assign(result, newObj)
            result = {...result, ...newObj}
        }
        

        if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            result[prefix] = value
        }

    }    

    return result
}

const nestedObject = {
  user: {
    id: 1,
    name: 'John',
    location: {
      city: 'New York',
      country: 'USA'
    }
  },
  meta: {
    isActive: true,
    lastLogin: '2025-06-01'
  }
};

console.log(flattenObject(nestedObject));


//output
// {
//   'user.id': 1,
//   'user.name': 'John',
//   'user.location.city': 'New York',
//   'user.location.country': 'USA',
//   'meta.isActive': true,
//   'meta.lastLogin': '2025-06-01'
// }
