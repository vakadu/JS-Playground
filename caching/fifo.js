class Fifo {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
  }

  get(key) {
    const index = this.queue.findIndex((item) => item.key === key);
    if (index === -1) {
      return -1;
    }
    return this.queue[index].value;
  }

  put(key, value) {
    const index = this.queue.findIndex((i) => i === key);
    if (index !== -1) {
      this.queue[index].value = value;
      return;
    }

    if (this.queue.length >= this.capacity) {
      this.queue.shift();
    }

    this.queue.push({ key, value });
  }
}

const fifoCache = new Fifo(3);
fifoCache.put(1, "A"); // cache is {1: 'A'}
fifoCache.put(2, "B"); // cache is {1: 'A', 2: 'B'}
fifoCache.put(3, "C"); // cache is {1: 'A', 2: 'B', 3: 'C'}
fifoCache.put(4, "D"); // cache is {2: 'B', 3: 'C', 4: 'D'}, evicts key 1
console.log(fifoCache.get(1)); // returns -1 (not found)
console.log(fifoCache.get(2)); // returns 'B'
