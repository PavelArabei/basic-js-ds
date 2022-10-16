const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rot = null;
  }
  root() {
    return this.rot ? this.rot : null;
  }

  add(value) {
    this.rot = addF(this.rot, value);
    function addF(x, value) {
      if (!x) return new Node(value);
      if (x.data === value) return x;
      value < x.data
        ? (x.left = addF(x.left, value))
        : (x.right = addF(x.right, value));
      return x;
    }
  }

  has(value) {
    return search(this.rot, value);
    function search(x, value) {
      if (!x) return false;
      if (x.data === value) return true;
      return value < x.data ? search(x.left, value) : search(x.right, value);
    }
  }
  find(value) {
    return search(this.rot, value);
    function search(x, value) {
      if (!x) return null;
      if (x.data === value) return x;
      return value < x.data ? search(x.left, value) : search(x.right, value);
    }
  }

  remove(value) {
    this.rot = removeX(this.rot, value);
    function removeX(x, value) {
      if (!x) return null;
      if (x.data > value) {
        x.left = removeX(x.left, value);
        return x;
      } else if (x.data < value) {
        x.right = removeX(x.right, value);
        return x;
      } else {
        if (!x.left && !x.right) return null;
        if (!x.left) return (x = x.right);
        if (!x.right) return (x = x.left);
        let min = x.right;
        while (min.left) {
          min = min.left;
        }
        x.data = min.data;
        x.right = removeX(x.right, min.data);
        return x;
      }
    }
  }

  min() {
    if (!this.rot) return;
    let x = this.rot;
    while (x.left) {
      x = x.left;
    }
    return x.data;
  }

  max() {
    if (!this.rot) return;
    let x = this.rot;
    while (x.right) {
      x = x.right;
    }
    return x.data;
  }
}

let xx = new BinarySearchTree();
console.log(xx.add(1));
console.log(xx.add(2));
console.log(xx.add(5));
console.log(xx.add(13));
console.log(xx.add(4));
console.log(xx.root());
console.log(xx.max());
console.log(xx.min());

module.exports = {
  BinarySearchTree,
};
