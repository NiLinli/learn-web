const graph = {};

graph['start'] = {
  a: 6,
  b: 2,
};

graph['a'] = {
  fin: 1,
};

graph['b'] = {
  fin: 5,
  a: 3,
};

graph['fin'] = {};

function dijkstra(graph) {
  function findLowestCostNode(costs, processed) {
    let minNodeWeight;
    let costNode;
    for (const k in costs) {
      if (Object.hasOwnProperty.call(costs, k)) {
        if (!processed.includes(k)) {
          const cost = costs[k];
          if (minNodeWeight === undefined) {
            minNodeWeight = cost;
            costNode = k;
            continue;
          }

          

          if (cost <= minNodeWeight) {
            minNodeWeight = cost;
            costNode = k;
          }
        }
      }
    }

    return costNode;
  }

  const costs = {};
  const parents = {};

  // 处理过的 node
  const processed = [];

  // 处理初始数据
  costs['start'] = 0;
  parents['start'] = null;

  let processingNode = findLowestCostNode(costs, processed);
  while (processingNode) {
    const cost = costs[processingNode];
    const neighbors = graph[processingNode];

    Object.getOwnPropertyNames(neighbors).forEach((node) => {
      if (costs[node] === undefined) costs[node] = Number.MAX_SAFE_INTEGER;

      let newCost = cost + neighbors[node];
      let originCost = costs[node];

      // 更新 costs 和 parents
      if (newCost < originCost) {
        costs[node] = newCost;
        parents[node] = processingNode;
      }
    });

    processed.push(processingNode);
    processingNode = findLowestCostNode(costs, processed);
  }

  console.log(costs, parents);
}

console.log(dijkstra(graph));
