class Tree {
  constructor(treeNode) {
    this.root = treeNode;
  }

  bfs(cb) {
    return bfs(this.root, cb);
  }

  dfs(cb) {
    return dfs(this.root, cb);
  }

  dfs2(cb) {
    return dfs2(this.root, cb);
  }
}

function bfs(node, cb) {
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const node = queue.shift();
    cb(node);

    if (node.children.length > 0) {
      queue.push.apply(queue, node.children);
    }
  }
}

function dfs(node, cb) {
  cb(node);
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
    cb(node);
    stack.push.apply(stack, node.children.reverse());
  }
}

module.exports = Tree;
