class Queue<T = any> {
  private _queue: Array<any>;

  constructor() {
    this._queue = [];
  }

  public enQueue(item: T): void {
    this._queue.push(item);
  }

  public deQueue(): T | undefined {
    if (this.isEmpty()) return;

    const item = this._queue[0];
    this._queue.splice(0, 1);
    return item;
  }

  public isEmpty(): boolean {
    return this._queue.length === 0;
  }

  public print(): void {
    for (let elm of this._queue) {
      console.log(elm);
    }
  }
}

const q = new Queue();

console.log("Adding elements... [1..5]");
for (let i = 1; i <= 5; i++) {
  q.enQueue(i);
}

q.print();

while (!q.isEmpty()) {
  console.log("Dequeuing element:", q.deQueue());
  q.print();
}

console.log("Queue is empty:", q.isEmpty());
