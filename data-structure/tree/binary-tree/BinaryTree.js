class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  // 遍历
  preOrder(cb) {
    // return preOrderRecursion(this.root, cb);
    return preOrderWhile(this.root, cb);
  }

  inOrder(cb) {
    // return inOrderRecursion(this.root, cb);
    return inOrderWhile(this.root, cb);
  }

  postOrder(cb) {
    // return postOrderRecursion(this.root, cb);
    return postOrderWhile(this.root, cb);
  }
}

// recursion
function preOrderRecursion(node, cb) {
  if (!node) return;

  cb(node);
  if (node.left) preOrderRecursion(node.left, cb);
  if (node.right) preOrderRecursion(node.right, cb);
}

function inOrderRecursion(node, cb) {
  if (!node) return;

  if (node.left) inOrderRecursion(node.left, cb);
  cb(node);
  if (node.right) inOrderRecursion(node.right, cb);
}

function postOrderRecursion(node, cb) {
  if (!node) return;

  if (node.left) postOrderRecursion(node.left, cb);
  if (node.right) postOrderRecursion(node.right, cb);
  cb(node);
}

// while
// 从顶部开始
function preOrderWhile(node, cb) {
  const stack = [];

  stack.push(node);

  while (stack.length > 0) {
    const topNode = stack.pop();
    cb(topNode);
    if (topNode.right) stack.push(topNode.right);
    if (topNode.left) stack.push(topNode.left);
  }
}

// 从左开始
function inOrderWhile(node, cb) {
  const stack = [];

  while (stack.length > 0 || node) {
    // 访问所有左边的子节点 放入堆栈中
    while (node) {
      stack.push(node);
      node = node.left;
    }

    // 节点存在 最新的左节点
    // 节点不存在 上一个左节点 也就是父节点
    const topNode = stack.pop();
    cb(topNode);
    node = topNode.right;
  }
}

// 从顶部开始, 需要辅助记录
function postOrderWhile(node, cb) {
  const stack = [];

  // 辅助 记录已经访问过的元素
  // 访问过的元素的右边元素是下一个要记录的元素
  const list = [];

  stack.push(node);

  while (stack.length > 0) {
    const topNode = stack.pop();
    list.push(topNode);
    if (topNode.left) stack.push(topNode.left);
    if (topNode.right) stack.push(topNode.right);
  }

  for (let i = list.length - 1; i >= 0; i--) {
    cb(list[i]);
  }
}

module.exports = BinaryTree;
