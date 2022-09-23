var yup = require('yup');

// 确定一个 schema
let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function() {
    return new Date();
  }),
});

// 检查是否合法
schema
  .isValid({
    name: 'jimmy',
    age: 24,
  })
  .then(function(valid) {
    console.log(valid); // => true
  });

schema
  .validate({
    name: 'nilinli',
    age: null
  })
  .then(values => console.log(values))
  // .catch(error => console.log(error))

// 按照定义的类型转换数据
// let result = schema.cast({
//   name: 'jimmy',
//   age: '24',
//   createdOn: '2014-09-23T19:25:25Z',
// });
// console.log(result);