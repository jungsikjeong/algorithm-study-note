class Node {
    constructor(value){
      this.value = value
      this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head ={
            value :value,
            next :null
        }

        this.tail=this.head
        this.length = 1;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    

    append(value){
        const newNode = new Node(value);
        this.tail.next= newNode;
        this.tail = newNode;
        this.length++
    }

    findNode(index){
        let count = 0;
        let currentNode = this.head
        while(count !== index){
        currentNode = currentNode.next
           count++;
        }
        return currentNode;
    }

    insert(index,value){
        if(index ===0){
            this.prepend(value)
            return
        }
        
        if(index >= this.length){
            this.append(value)
            return
        }

    const newNode = new Node(value)
    const prevNode = this.findNode(index - 1)
    const nextNode = prevNode.next
    newNode.next = nextNode; // 2번 역할
    prevNode.next = newNode; // 3번 역할 
    this.length++;
    }

    remove(index){
        const prevNode = this.findNode(index - 1);
        const removeNode = prevNode.next;
        prevNode.next = removeNode.next
        this.length--;
    }
}


/**
 * prevNode.next = removeNode.next; 이 줄이 연결을 "끊고 건너뛰는" 핵심임
삭제할 노드는 메모리상엔 남아있지만, 리스트에서 더 이상 연결되지 않으니 "고아가 된 것처럼 버려져서" GC(Garbage Collector)가 정리하게 됨
 */
remove(index) 