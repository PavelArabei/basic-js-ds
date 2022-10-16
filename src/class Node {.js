class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
  
   
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new Node(value);
      return this.head.value;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    console.log(this.current);
    this.length++;
  }

  dequeue() {}
}
let xx = new Queue();
console.log(xx.enqueue("b"));
console.log(xx);
console.log(xx.getUnderlyingList());
