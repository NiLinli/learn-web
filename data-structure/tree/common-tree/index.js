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

const tree = createSomeTree();

const logNodeVal = (node) => {
  console.log(node.value);
};

// tree.bfs(logNodeVal);
// tree.dfs(logNodeVal);
tree.dfs2(logNodeVal);
