function myObjectCreate(proto, propertiesObject) {
    // Create a new object that will inherit from the given prototype
    if (proto !== null && typeof proto !== 'object') {
        throw new TypeError('The prototype must be an object or null');
    }

    // Create a new empty object
    const newObject = {};

    // Set the prototype (to simulate the behavior of Object.create)
    Object.setPrototypeOf(newObject, proto);

    // If properties are provided, add them to the new object
    if (propertiesObject !== undefined) {
        Object.defineProperties(newObject, propertiesObject);
    }

    return newObject;
}

// Prototype object with a method
const personProto = {
    greet() {
        return `Hello, ${this.name}!`;
    }
};

// Define properties to add to the new object
const properties = {
    name: { value: 'John', writable: true, enumerable: true }
};

// Creating a new object with `personProto` as its prototype
const person = myObjectCreate(personProto, properties);

// The new object will inherit methods from personProto
console.log(person.greet()); // Output: Hello, John!
