function listToTree(list) {
  const tree = [];

  const listObj = {};
  for (let item of list) {
    listObj[item.id] = item;
  }

  // n
  for (let curr of list) {
    // n
    // const parent = list.find((item) => curr.parentId === item.id);

    // 1
    const parent = listObj[curr.parentId];

    if (parent) {
      // not root
      parent.children ? parent.children.push(curr) : (parent.children = [curr]);
    } else {
      // root
      tree.push(curr);
    }
  }

  return tree;
}

function listToTreeRecursive(list, parentId) {
  const result = [];
  for (let item of list) {
    // 基线条件
    if (item.parentId === parentId) {
      item.children = listToTreeRecursive(list, item.id);
      result.push(item);
    }
  }
  return result;
}

const list = [
  {
    id: 1001,
    parentId: 0,
    name: 'AA',
  },
  {
    id: 1002,
    parentId: 1001,
    name: 'BB',
  },
  {
    id: 1003,
    parentId: 1001,
    name: 'CC',
  },
  {
    id: 1004,
    parentId: 1003,
    name: 'DD',
  },
  {
    id: 1005,
    parentId: 1003,
    name: 'EE',
  },
  {
    id: 1006,
    parentId: 1002,
    name: 'FF',
  },
  {
    id: 1007,
    parentId: 1002,
    name: 'GG',
  },
  {
    id: 1008,
    parentId: 1004,
    name: 'HH',
  },
  {
    id: 1009,
    parentId: 1005,
    name: 'II',
  },
];

// listToTree(list);
console.log(JSON.stringify(listToTreeRecursive(list, 0)));

  