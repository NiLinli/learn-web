var yup = require('yup');

var schema = yup.string().required('必须要有字段');
var schema02 = yup.number().min(18, '必须要 >= 18');
var schema03 = yup.object().shape({
  email: yup.string().email('正确邮箱'),
  age: yup.number().min(1, '必须要大于 1')
})

schema
  .validate(123)
  .then(value => console.log(value))
  .catch(error => console.log(error))

schema02
  .validate(11)
  .then(value => console.log(value))
  .catch(error => console.log(error.errors))
  
schema03
  .validate({
    email: 'nilinli',
    age: 0
  })
  .then(value => console.log(value))
  .catch(error => console.log(error.errors))    // 返回最后一个错误
  