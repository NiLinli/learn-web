// Data Template Definition 数据模版定义规范
const Mock = require('mockjs');

const data = Mock.mock({
  'list|1-10': [
    {
      // name 属性名
      // rule 生成规则
      // value 值/默认值
      // ‘name｜rule’: value
      'id|+1': 1,
    },
  ],
  // string
  'string1|1-8': 'repeat',
  'string2|2': 'repeat',
  // number
  'number1|+1': 100,
  'number2|1-1000': 1, // 1-1000的数字
  'number3|1-1000.3-9': 1, // 1-1000的数字, 浮点为 3 到 9 位
  // bool
  'bool1|1': true,
  'bool2|1-2': true, //  1/(2+1) 为 true
  // object 从对象中取出属性
  'obj1|2': {
    foo: 1,
    bar: 2,
    some: 3,
  },
  'obj2|1-2': {
    foo: 1,
    bar: 2,
    some: 3,
  },
  // array
  'array1|1': [1, 2, 3, 54, 56, 6], // 取一个数组
  'array2|+1': [1, 2, 3, 54, 56, 6], // 依次取出数组
  'array3|3-10': [1, 2], // 重复数组 3-10
  'array4|3': [1, 2], // 重复数组 3
  // function
  func1: function () {
    return 123;
  },
  // regexp 生成满足正则表达式的结果
  regexp1: /[a-z][A-Z][0-9]/,
});

console.log(JSON.stringify(data, null, 4));


// 转换 Mockjs 风格代码到 JSON Schema 风格
// Mock.toJSONSchema( template )
