class Node {
  constructor(value) {
    this.first = valie;
    this.last = null;
  }
}

class queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    // 새 노드를 만든다.
    const newNode = new Node(value);
    // 비어있다면? first와 last 둘 다 새 노드로 지정.
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 내용물이 있다면?
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    // 길이를 1 늘린다.
    this.length++;
  }

  dequeue() {
    // 비어있는지 확인 (비었으면 null 반환).
    if (!this.first) return null;

    // 나갈 노드(first)를 변수에 저장한다.
    const removedNode = this.first;

    // 하나뿐이라면? first와 last 둘 다 null로 만든다.
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // 여러 개라면?
      this.first = this.first.next;
    }

    // 길이를 1 줄인다.
    this.length--;
    // 나간 노드의 값을 반환한다.
    return removedNode;
  }
}
