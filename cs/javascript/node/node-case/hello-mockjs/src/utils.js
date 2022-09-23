const Mock = require('mockjs');

const template = {
  email: '@email',
};

const data = {
  email: 'nilinli1994@gmail.com',
};

const data2 = {
  email: 123
};


// 只是对比形式, 没有校验值的类型或者说正则测试
console.log(Mock.valid(template, data));
console.log(Mock.valid(template, data2));
