// 装饰器工厂函数
function f() {
  console.log('f(): evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called');
  }
}

function g() {
  console.log('g(): evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called');
  }
}

class C {
  // 装饰器函数执行是从上到下
  // 返回的函数执行是从下到上 f(g(x))
  @f()
  @g()
  method() { }
}