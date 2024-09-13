export default class Stack {
  constructor() {
    // this._items = new Map();
    this._items = [];
  }

  push(item) {
    // this._items.set(item, item);
    this._items.push(item);
  }

  pop() {
    // const last = Array.from(this._items)[this._items.size - 1][0];
    // this._items.delete(last);
    // return last;
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items.pop();
  }

  isEmpty() {
    return this._items.length === 0;
  }

  peek() {
    // const last = Array.from(this._items)[this._items.size - 1][0];
    // return last;
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._items.length - 1];
  }

  length() {
    return this._items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
console.log(stack.length());
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
