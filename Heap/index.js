class MaxHeap {
  constructor(sourceArr) {
    this.data = [];

    for (let elm of sourceArr) {
      this.insert(elm);
    }
  }

  swap(i, j) {
    let tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  insert(elm) {
    this.data.push(elm);
    let index = this.data.length - 1;

    let parentIndex = this.getParentIndex(index);

    do {
      if (this.data[parentIndex] < elm) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(parentIndex);
      } else {
        break;
      }
    } while (parentIndex >= 0);
  }

  extractTop() {
    const top = this.data[0];
    this.swap(this.data.length - 1, 0); // move last elm to the root
    this.data.pop();

    let index = 0;

    while (true) {
      let leftIndex = this.getLeftIndex(index);
      let rightIndex = this.getRightIndex(index);

      let maxChild, maxChildIndex;
      if (this.data[leftIndex] > this.data[rightIndex]) {
        maxChild = this.data[leftIndex];
        maxChildIndex = leftIndex;
      } else {
        maxChild = this.data[rightIndex];
        maxChildIndex = rightIndex;
      }

      if (this.data[index] < maxChild) {
        this.swap(maxChildIndex, index);
        index = maxChildIndex;
      } else {
        break;
      }
    }

    return top;
  }

  sort() {
    const copy = this.data.slice();

    const sorted = [];
    while (this.data.length) {
      sorted.push(this.extractTop());
    }

    this.data = copy;

    return sorted;
  }
}

function randomNum(n) {
  return Math.floor(Math.random() * n);
}

const seed = [];
for (let i = 0; i < 100_000; i++) {
  seed.push(randomNum(1000));
}

const mh1 = new MaxHeap(seed);
console.log(mh1.sort().join());
