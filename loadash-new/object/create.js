function create(prototype, properties) {
  // Create a new object with `prototype` as its prototype
  let newObj = Object.create(prototype);
  
  // If properties are provided, add them to the new object
  if (properties) {
    for (let key in properties) {
      if (properties.hasOwnProperty(key)) {
        newObj[key] = properties[key];
      }
    }
  }

  return newObj;
}



const prototype = { greet: function() { return 'Hello!'; } };

const newObj = create(prototype, { name: 'John' });

console.log(newObj.name);  // Expected: 'John'
console.log(newObj.greet());  // Expected: 'Hello!'
console.log(newObj.__proto__ === prototype);  // Expected: true
