let person = {
    name: "vinod",
    village: 'vakadu',
    printDetails: function() {
        return `${this.name}-> ${this.village}`
    }
}

let person2 = {
    name: "ram",
    village: 'ayodya',
}

let person3 = {
    name: "lakshman",
    village: 'ayodya',
}

console.log(person.printDetails());
console.log(person.printDetails.call(person2));
console.log(person.printDetails.apply(person2));

Object.prototype.customBind = function(context, ...params) {
    let current = this    
    return function(...args) {
        return current.apply(context, [...params, ...args])        
    } 
}


const temp = person.printDetails.customBind(person3);
console.log(temp());

