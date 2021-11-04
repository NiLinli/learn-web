const Tree = require('./Tree');
const TreeNode = require('./TreeNode');

function createSomeTree() {
  const home = new TreeNode('home');

  const nll = new TreeNode('nll');
  const lqc = new TreeNode('lqc');

  const basketball = new TreeNode('basketball');
  const book = new TreeNode('book');

  const tv = new TreeNode('tv');
  const cards = new TreeNode('cards');

  const tree = new Tree(home);

  home.children.push(nll, lqc);
  nll.children.push(basketball, book);
  lqc.children.push(tv, cards);

  return tree;
}

function bfs(node, cb) {
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const node = queue.shift();
    cb(node.value);

    if (node.children.length > 0) {
      queue.push.apply(queue, node.children);
    }
  }
}

function dfs(node, cb) {
  cb(node.value);
  if (node.children.length > 0) {
    node.children.forEach((node) => {
      dfs(node, cb);
    });
  }
}

function dfs2(node, cb) {
  const stack = [];
  stack.push(node);

  while (stack.length > 0) {
    const node = stack.pop();
    cb(node.value);
    stack.push.apply(stack, node.children.reverse())
  }
}

const tree = createSomeTree();

const logNodeVal = (val) => {
  console.log(val);
};

// bfs(tree.root, logNodeVal);
// dfs(tree.root, logNodeVal);
dfs2(tree.root, logNodeVal);
