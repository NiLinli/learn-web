class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (this.root) {
      this._insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  _insertNode(root, node) {
    if (node.value > root.value) {
      // 右边
      if (root.right) {
        this._insertNode(root.right, node);
      } else {
        root.right = node;
      }
    } else {
      // 左边
      if (root.left) {
        this._insertNode(root.left, node);
      } else {
        root.left = node;
      }
    }
  }

  search(key) {}

  inOrderTraverse(node, cb) {
    if (node) {
      this.inOrderTraverse(node.left, cb);
      cb(node.value);
      this.inOrderTraverse(node.right, cb);
    }
  }

  preOrderTraverse(node, cb) {}

  preOrderTraverse(node, cb) {}

  min() {}

  max() {}

  remove() {}
};
