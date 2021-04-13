// 通过散列表记录图
// 记录当前节点与其邻居的关系

const graph = {};

graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

const graph2 = {};
graph2['you'] = ['mike'];
graph2['mike'] = ['you'];

function bfsSearch(graph) {
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
