class ListNode<T = any> {
  value: T;
  next: ListNode | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  add(value: any): void {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  indexOf(value: any): number {
    let current: any = this.head;
    let index = 0;

    do {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    } while (current);

    return -1;
  }

  print(): void {
    let current: any = this.head;

    do {
      console.log("-", current?.value);
      current = current?.next;
    } while (current);
  }
}

const l = new LinkedList();

console.log("Adding elements... [1..5]");
for (let i = 1; i <= 5; i++) {
  l.add(i);
}
l.print();

console.log("Index of 3:", l.indexOf(3));
