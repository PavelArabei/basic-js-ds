const { NotImplementedError, ListNode } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(el) {
    if (this.length === 0) {
      this.head = new ListNode(el);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(el);
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    } else {
      let prev = null;
      let current = this.head;
      let i = 0;
      while (i < this.length - 1) {
        prev = current;
        current = current.next;
        i++;
        console.log(current);
      }
      this.length--;
      prev.next = current;
      return current.value;
    }
  }

  peek() {
    if (this.length === 0) {
      return;
    } else {
      let current = this.head;
      let i = 0;
      while (i < this.length - 1) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  }
}
let xx = new Stack();
console.log(xx.push("ss"));
console.log(xx.push("bb"));
console.log(xx.push("aa"));
console.log(xx.peek());
console.log(xx.pop());
console.log(xx.peek());

module.exports = {
  Stack,
};
