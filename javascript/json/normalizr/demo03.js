const normalizr = require('normalizr');
const {
  normalize,
  schema
} = normalizr;

const data = {
  users: [{
    id: '123',
    name: 'Beth'
  }],
  other: 'this value is will not be normalized'
};

const user = new schema.Entity('users');

// or shorthand
const responseSchema = {
  users: [user]
};

const normalizedData = normalize(data, responseSchema);
console.log(JSON.stringify(normalizedData, null, 2));

// Object
// 定义 object 里面需要 entity 的部分
// 其他部分不做处理, 自动拷贝