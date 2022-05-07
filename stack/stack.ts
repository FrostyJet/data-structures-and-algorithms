class Stack<T = any> {
  private _stack: Array<T>;

  constructor() {
    this._stack = [];
  }

  push(item: T): void {
    this._stack.push(item);
  }

  pop(): T | undefined {
    return this._stack.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) return;
    return this._stack[this._stack.length - 1];
  }

  isEmpty(): boolean {
    return this._stack.length === 0;
  }

  print(): void {
    for (let elm of this._stack) {
      console.log(elm);
    }
  }
}

const s = new Stack();

console.log("Adding elements... [1..5]");
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);

s.print();

console.log("Peeking element:", s.peek());

console.log("Popping element:", s.pop());
s.print();

console.log("Clearing the stack...");
while (!s.isEmpty()) {
  console.log("Popping element:", s.pop());
}
