// 通过散列表记录图
// 记录当前节点与其邻居的关系
const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const graph2 = {
  you: 'mike',
  mike: 'you',
};

module.exports = {
  graph,
  graph2,
};
