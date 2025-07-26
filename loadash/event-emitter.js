class EventEmitter{
    constructor() {
        this.listeners = new Map()
    }

    on(event, listener) {
        if(!this.listeners.has(event)) {
            this.listeners.set(event, [])
        }
        this.listeners.get(event).push(listener)
    }

    off(event, listener) {
        const eventListeners = this.listeners.get(event);
        if (eventListeners) {
            // Remove the specific listener from the array
            const index = eventListeners.indexOf(listener);
            if (index !== -1) {
                eventListeners.splice(index, 1);
            }
            // If there are no listeners left, delete the event
            if (eventListeners.length === 0) {
                this.listeners.delete(event);
            }
        }
    }

    emit(event, ...args) {        
        const eventListeners = this.listeners.get(event);
        if(eventListeners) {
            eventListeners.forEach(listener => {
                listener(...args)
            });
        }
    }
}

// const emitter = new EventEmitter();

// function onFoo(data) {
//   console.log("foo event received:", data);
// }

// emitter.on("foo", onFoo)
// emitter.emit("foo", { some: "data" }, {"mopr": "moredata"}); // Should log: "foo event received: { some: 'data' }"

// const emitter = new EventEmitter();

// // Event listener
// function onBar(data) {
//   console.log("bar event received:", data);
// }

// // Register event listener
// emitter.on("bar", onBar);

// // Emit the event before removal
// emitter.emit("bar", { another: "data" }); // Should log: "bar event received: { another: 'data' }"

// // Remove event listener
// emitter.off("bar", onBar);

// // Emit the event again (no listeners should be triggered)
// emitter.emit("bar", { another: "data" }); // Should not log anything

const emitter = new EventEmitter();

// Event listeners
function listener1(data) {
  console.log("Listener 1 received:", data);
}

function listener2(data) {
  console.log("Listener 2 received:", data);
}

// Register both listeners
emitter.on("baz", listener1);
emitter.on("baz", listener2);

// Emit the event
emitter.emit("baz", { more: "data" }); 
// Should log:
// "Listener 1 received: { more: 'data' }"
// "Listener 2 received: { more: 'data' }"


// const emitter = new EventEmitter();

// // Event listener
// function onTest(data) {
//   console.log("Test event received:", data);
// }

// // Register event listener
// emitter.on("test", onTest);

// // Emit the event twice
// emitter.emit("test", { message: "First emit" }); // Should log: "Test event received: { message: 'First emit' }"
// emitter.emit("test", { message: "Second emit" }); // Should log: "Test event received: { message: 'Second emit' }"

// const emitter = new EventEmitter();

// // Event listener
// function onNonExistent() {
//   console.log("This should never be called.");
// }

// // Remove a listener that was never registered
// emitter.off("nonexistent", onNonExistent);

// // Emit an event to check if any error occurs
// emitter.emit("nonexistent"); // Should not log anything, no error expected
