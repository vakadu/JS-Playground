class BackboneModel {
  constructor(intialvales) {
    this.map = new Map();
    Object.entries(intialvales).forEach(([key, val]) => {
      this.map.set(key, {
        val,
        events: {
          change: [],
          unset: [],
        },
      });
    });
  }

  get(property) {
    if (this.map.has(property)) {
      return this.map.get(property).val;
    }
  }

  has(property) {
    return this.map.has(property);
  }

  set(attribute, val) {}

  on(eventName, attribute, callback, context) {
    const atrributeData = this.map.get(attribute);
    if (!atrributeData) {
      return;
    }

    atrributeData.events[eventName].push({
      fn: callback,
      context,
    });
  }

  off(eventName, attribute, callback, context) {
    const atrributeData = this.map.get(attribute);
    if (!atrributeData) {
      return;
    }

    atrributeData.events[eventName].push({
      fn: callback,
      context,
    });
  }
}

const person = new BackboneModel({ name: "John", age: 32 });
console.log(person.get("name"));
console.log(person.get("age"));

console.log(person.has("name")); // true
console.log(person.has("gender"));

person.unset("age");
console.log(person.get("age"));

function nameChangeCallback(attribute, newName, oldName) {
  console.log(`'${attribute}' changed from '${newName}' to '${oldName}'`);
}
// Register an event listener for a change in the `name` field.
person.on("change", "name", nameChangeCallback);
person.set("name", "Bob");
