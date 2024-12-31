class Stock {
  constructor(name) {
    this.name = name;
    this.stocks = new Map();
  }

  subscribe(stock) {
    this.stocks.set(stock.name, stock);
  }

  unsubscribe(stock) {
    this.stocks.delete(stock.name);
  }

  notify() {
    this.stocks.forEach((stock) => {
      stock.update(`${this.name} is updated`);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(msg) {
    return msg;
  }
}

function test() {
  const s1 = new Stock("x");

  const u1 = new Observer("u1");
  const u2 = new Observer("u2");

  s1.subscribe(u1);
  s1.subscribe(u2);

  s1.notify();
}

test();
