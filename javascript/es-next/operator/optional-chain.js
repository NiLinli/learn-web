// null undefined 就会返回 undefined
// ? 判断当前属性不存在的话, 就会返回当前属性 undefined/null, 不会继续往下
const data = {
  msg: 'oh xxxx',
  data: {
    a: 123,
    b: {
      b1: 456
    },
    foo: () => {
      console.log('foo');
    }
  }
}

console.log(data.data?.a?.ccc);

data.data.b.foo?.();
data.data.b.foo && data.data.b.foo();
