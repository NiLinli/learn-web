const normalizr = require('normalizr');
const { normalize, schema } = normalizr;

// Values
// 处理所有 key 对应 value 都是一种类型的 情况
const data0 = { 
  firstThing: { 
    id: 1
  }, 
  secondThing: {
    id: 2
  } 
};

const item = new schema.Entity('items');
const valuesSchema0 = new schema.Values(item);
const normalizedData0 = normalize(data0, valuesSchema0);

console.log(JSON.stringify(normalizedData0, null, 2));

const data1 = {
  '1': { 
    id: 1,
    type: 'admin' 
  }, 
  '2': {
    id: 2,
    type: 'user' 
  }
};

const userSchema = new schema.Entity('users');
const adminSchema = new schema.Entity('admins');
const valuesSchema1 = new schema.Values({
  admins: adminSchema,
  users: userSchema
}, (input, parent, key) => `${input.type}s`);

const normalizedData1 = normalize(data1, valuesSchema1);

console.log(JSON.stringify(normalizedData1, null, 2));