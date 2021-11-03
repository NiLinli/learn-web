const { graph, graph2 } = require('./graph')

// 添加到队列 保证顺序
function bfsSearch(topNode) {
  let queue = [];
  let processed = [];

  queue = queue.concat(graph['you']);

  while (queue.length > 0) {
    // dequeue
    const pick = queue.shift();
    // 检查过的不再检查
    if (processed.includes(pick)) continue;

    if (isMongoDms(pick)) {
      return pick;
    } else {
      processed.push(pick);
      queue = queue.concat(graph[pick]);
    }
  }

  // 没找到符合条件的
  return false;
}

function isMongoDms(name) {
  return name[name.length - 1] === 'm';
}

console.log(bfsSearch(graph));

console.log(bfsSearch(graph2));
