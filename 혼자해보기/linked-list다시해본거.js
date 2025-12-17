class Node{
  constructor(value){
    this.valeu= value
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next:null
    }
    this.tail = this.head
    this.length=1
  }

  findNode(index){
    let count=0
    let currentNode = this.head 

    while(count < index ){
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  insert(index,value){
     if(index === 0 ){
      this.prepend(value)
      return 
     }

    // index가 현재 연결리스트보다 크면 맨 끝에 삽입
     if(index >= this.length){
      this.append(value)
      return
     }

     const newNode = new Node(value)
     const prevNode = this.findNode(index - 1)
     const nextNode = prevNode.next
     
     newNode.next = nextNode.next
     prevNode.next = newNode
     this.length++;
  }

  remove(index){
    const prevNode = this.findNode(index - 1)
    const removeNode = prevNode.next
    prevNode.next = removeNode.next
    this.length--

  }

}