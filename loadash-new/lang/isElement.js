function isElement(value) {
    return value != null &&                 // not null or undefined
           typeof value === 'object' &&     // must be object
           value.nodeType === 1 &&          // element node
           typeof value.nodeName === 'string'; // tag name should be a string
}

console.log(isElement(document.body));             // true
console.log(isElement(document.createElement('p'))); // true
console.log(isElement(null));                      // false
console.log(isElement('<div>'));                   // false
console.log(isElement({ nodeType: 1 }));            // false (fake)
