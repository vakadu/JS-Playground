class Counter {
  constructor(count) {
    this.count = count;
  }

  increament() {
    return this.count++;
  }
}

const count = new Counter(1);
console.log(count.increament());
console.log(count.increament());
