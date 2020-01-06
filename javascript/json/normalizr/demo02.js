const normalizr = require('normalizr');

const { normalize, schema } = normalizr;

// Array
// 简单情况下的 Array
const data0 = [
  {
    cardid: 5,
    name: "nilinli990",
    pub: "PUB_K1_8mJKGg8cTaSgox3rR5TvFki1LxGq4iVfJ9JeDXyTdaM2PKx2hr",
    type: 1
  },
  {
    cardid: 6,
    name: "nilinli990",
    pub: "PUB_K1_8mJKGg8cTaSgox3rR5TvFki1LxGq4iVfJ9JeDXyTdaM2PKx2hr",
    type: 1
  },
  {
    cardid: 7,
    name: "nilinli990",
    pub: "PUB_K1_8mJKGg8cTaSgox3rR5TvFki1LxGq4iVfJ9JeDXyTdaM2PKx2hr",
    type: 1
  }
];

const walletSchema = new schema.Entity('wallets', {}, {
  idAttribute: 'cardid'
});

const walletListSchema = [walletSchema];

const normalizedData0 = normalize(data0, walletListSchema);

console.log(JSON.stringify(normalizedData0, null, 2));


// Array 支持多个 schema
// 数组中如果有不止一种类型的实体
// 需要定义一个 schema mapping


const data1 = [
  { id: 1, type: 'admin' }, 
  { id: 2, type: 'user' },
  { id: 3, type: 'admin' },
  { id: 4, type: 'admin' },
  { id: 5, type: 'user' },
  { id: 6, type: 'admin' },
];

const userSchema = new schema.Entity('users');
const adminSchema = new schema.Entity('admins');

const myArray = new schema.Array({
  admins: adminSchema,
  users: userSchema
}, (input, parent, key) =>  {
  return `${input.type}s`;
});

const normalizedData1 = normalize(data1, myArray);

console.log(JSON.stringify(normalizedData1, null, 2));