class EventEmitter {
  constructor() {
    this.listners = new Map();
  }

  on(eventName, listner) {
    if (!this.listners.has(eventName)) {
      this.listners.set(eventName, []);
    }
    this.listners.get(eventName).push(listner);
  }

  emit(eventName, ...args) {
    if (this.listners.has(eventName)) {
      this.listners.get(eventName).forEach((listner) => {
        listner(...args);
      });
    }
  }

  off(eventName, listnerName) {
    if (this.listners.has(eventName)) {
      this.listners.set(
        eventName,
        this.listners
          .get(eventName)
          .filter((listner) => listner !== listnerName)
      );
    }
  }
}

const ev1 = new EventEmitter();

function greetListner(name) {
  console.log(`Hello ${name}`);
}

ev1.on("greet", greetListner);
ev1.emit("greet", "Sachin");
ev1.emit("greet", "Saurav");

ev1.off("greet", greetListner);
