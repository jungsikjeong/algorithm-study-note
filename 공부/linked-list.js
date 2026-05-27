class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; // 처음엔 연결 부분이없으니 꼬리가 머리와 같음
        this.length = 1; 
    }

        prepend(value){
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }



        append(value) {
            const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }

        findNode(index){
            let count = 0;
            let currentNode = this.head;
            while(count !== index){
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        }

        insert(index, value){
          if(index ===0){
            this.prepend(value);
            return;
          }

          if(index >= this.length){
            this.append(value);
            return;
          }

          
          const newNode = new Node(value);
          const prevNode = this.findNode(index - 1 )
          const nextNode = prevNode.next;
          newNode.next = nextNode; // 2번 역할
          prevNode.next = newNode; // 3번 역할
          this.length++;
        }


        remove(index){
            const prevNode = this.findNode(index - 1);
            const removeNode = prevNode.next;
            prevNode.next = removeNode.next;
            this.length--;
        }


        printList(){
            const array = [];
            let currentNode = this.head;
            while(currentNode !== null){
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }
            console.log(array);
        }
    }

    const linkedList = new LinkedList("Dora");;
    linkedList.append('Sindy')
    linkedList.append('Mary')
    linkedList.printList()
    linkedList.remove(1)
    linkedList.printList()

    