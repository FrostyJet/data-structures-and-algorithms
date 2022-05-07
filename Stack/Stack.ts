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
for (let i = 1; i <= 5; i++) {
  s.push(i);
}

s.print();

console.log("Clearing the stack...");
while (!s.isEmpty()) {
  console.log("Popping element:", s.pop());
}

console.log("Stack is empty:", s.isEmpty());
