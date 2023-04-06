const target = {
  a: 2,
  arr: [1, 2, 3],
};

const p = new Proxy(target, {
  get(target, name, context) {
    console.log('target get ->', target, name);
    return Reflect.get(target, name, context);
  },
  set(target, name, context) {
    console.log('target set ->', target, name);
    return Reflect.set(target, name, context);
  },
});

const proxyArr = new Proxy(target.arr, {
  get(target, name, context) {
    console.log('arr get ->', target, name);
    return Reflect.get(target, name, context);
  },
  set(target, name, context) {
    // arr 也是 object, 所以也可以监听
    console.log('arr set ->', target, name);
    return Reflect.set(target, name, context);
  },
});

console.log(p.a);
// target -> get
// p.arr[1] 中 p.arr 这一段触发 get, 所以 proxy 只处理当前对象的属性
console.log(p.arr[1]);
// target -> get
p.arr[1] = 1000;

proxyArr[1] = 10;
// set 监听 length 变化
proxyArr.push(123);
console.log(proxyArr[1]);
