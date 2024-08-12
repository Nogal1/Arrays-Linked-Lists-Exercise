/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (newTail === current) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    let current = this.head;
    let count = 0;

    while (current && count !== idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    let current = this.head;
    let count = 0;

    while (current && count !== idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid index");

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (count !== idx - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    let count = 0;

    while (count !== idx - 1) {
      current = current.next;
      count++;
    }

    const removedNode = current.next;
    current.next = removedNode.next;

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;

    let total = 0;
    let count = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      count++;
      current = current.next;
    }

    return total / count;
  }
}

module.exports = LinkedList;
