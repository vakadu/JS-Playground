function groupBy(array, key) {
    let result = {};

    for (const element of array) {
        const myKey = element[key];        

        if(!result[myKey]) {
            result[myKey] = []
        }
        result[myKey].push(element)
    }

    return result
}

const users = [
  { name: 'Alice', age: 25, role: 'developer' },
  { name: 'Bob', age: 32, role: 'designer' },
  { name: 'Charlie', age: 25, role: 'developer' },
  { name: 'David', age: 40, role: 'manager' },
  { name: 'Eve', age: 32, role: 'designer' },
  { name: 'Frank', age: 40, role: 'developer' }
];
console.log(groupBy(users, 'age'));
console.log(groupBy(users, 'role'));

