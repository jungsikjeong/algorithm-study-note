class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) return null;

    const removedNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next; // TODO: 이부분 이해를 했는데, 다시 풀어볼 예정
    }

    this.length--;
    return removedNode;
  }
}
