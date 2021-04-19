// 节点
class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

module.exports = class LinkedList {
  // create
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    let head = this.head;

    // 空链表
    if (!head) {
      this.head = node;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
    this.size++;
  }

  set(index, value) {}

  get(index) {}

  find(value) {}

  findIndex(value) {}

  insert(index, value) {}

  freeList() {}

  getListSize() {}

  print() {
    let head = this.head;
    const printArr = [];
    while (head) {
      printArr.push(head.value);
      head = head.next;
    }

    console.log('head-->' + printArr.join('-->'));
  }

  // 其他骚操作
  reverse() {
    let head = this.head;

    if (!head) return;

    // 当前指向前一个节点
    let prevHead = null;
    while (head) {
      // 尾部处理
      if (!head.next) this.head = head;
      let next = head.next;

      // 头部处理
      head.next = (prevHead) ? prevHead: null;
      prevHead = head;
      head = next;
    }
  }
};
