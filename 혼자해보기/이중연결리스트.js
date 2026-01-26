class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  findNode(index) {
    let count = 0;
    let currentNode = this.head;
    while (index < count) {
      currentNode = currentNode.next
      count++;
    }
    return currentNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const prevNode = this.findNode(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode; // 이부분 다시 살펴볼것

    this.length++;
  }

  remove(index){
     if(index === 0 ){
      if(this.length === 1){
        this.head = null
        this.head.prev = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.length--;
      return;
     }

     // index가 길이보다 크거나 같으면 삭제할게 없음
    if(index >= this.length) return

    // 특정인덱스 삭제
    const prevNode = this.findNode(index - 1)
    const removeNode = prevNode.next;
    const nextNode = removeNode.next;
    prevNode.next = nextNode

    if(nextNode){
      nextNode.prev = prevNode
    }else {
      this.tail = prevNode
    }

    this.length--;

  }
}

