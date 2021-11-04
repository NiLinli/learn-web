class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  setLeft(node) {
    if (this.left) this.left.parent = null;

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    if (this.right) this.right.parent = null;

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }
}

module.exports = BinaryTreeNode;
