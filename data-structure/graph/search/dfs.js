const { graph } = require('./graph');

// 递归
function dfsSearch(graph) {
  let processed = [];
  return travel(graph['you'], graph, processed);
}

function travel(links, graph, processed) {
  links.forEach((item) => {
    if (processed.includes(item)) return;
    processed.push(item);
    travel(graph[item], graph, processed);
  });

  return processed;
}

// 栈模拟递归
// 1. 压栈进入
// 2. 取出栈顶的元素
// 3. 判断 栈是否为空, 不为空进入 4, 为空退出
// 4. 取出子元素压栈进入, 回到 2
function dfsSearch2(graph) {
  const processed = [];
  let stack = [];

  stack = stack.concat(graph['you'].reverse());

  while (stack.length > 0) {
    const node = stack.pop();
    if (processed.includes(node)) continue;
    processed.push(node);
    stack = stack.concat(graph[node].reverse());
  }

  return processed;
}

console.log(dfsSearch(graph));
console.log(dfsSearch2(graph));
