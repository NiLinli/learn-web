

const normalizr = require('normalizr');
const { normalize, schema } = normalizr;

// 相同类型的数据, 可能匹配多个 schema
// 使用 Union
// 使用范围比数组中支持多个 schema 要广泛
const data = { 
  owner: [
    { 
      id: 1,
      type: 'user',
      name: 'Anne'
    }
  ] 
};

const user = new schema.Entity('users');
const group = new schema.Entity('groups');

const unionSchema = new schema.Union({
  user: user,
  group: group
}, 'type');
// 如果是函数的返回值与 key 相同即为相应的 schema

const normalizedData = normalize(data, { owner: [unionSchema] });

console.log(JSON.stringify(normalizedData, null, 2));