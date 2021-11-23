const BinaryTree = require('./BinaryTree');
const BinaryTreeNode = require('./BinaryTreeNode');

const tree = createSomeBinaryTree();

const logValue = (node) => console.log(node.value);

tree.preOrder(logValue);
tree.inOrder(logValue);
tree.postOrder(logValue);

function createSomeBinaryTree() {
  const node1 = new BinaryTreeNode(1);
  const tree = new BinaryTree(node1);

  const node2 = new BinaryTreeNode(2);
  const node3 = new BinaryTreeNode(3);
  const node4 = new BinaryTreeNode(4);
  const node5 = new BinaryTreeNode(5);
  const node6 = new BinaryTreeNode(6);
  const node7 = new BinaryTreeNode(7);

  node1.setLeft(node2);
  node1.setRight(node3);

  node2.setLeft(node4);
  node2.setRight(node5);

  node3.setLeft(node6);
  node3.setRight(node7);

  return tree;
}
