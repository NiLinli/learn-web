// 对象解构
const nodeNest = {
  type: 'Identifier',
  name: 'foo',
  id: 292,
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
};

// 声明加解构
const { type, name, notFound = 'none' } = nodeNest;

// 赋值解构
let id;
({ id } = nodeNest); // 必须要带括号

// 别名
const { id: ID } = nodeNest;
console.log(type, name, notFound, id, ID);

// nest
const {
  loc: {
    start: { line },
  },
} = nodeNest;

console.log(line); // loc, start 未定义
