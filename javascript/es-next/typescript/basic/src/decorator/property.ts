function observer() {
  return function (target: any,
    propertyKey: string) {
    let _pValue = target[propertyKey];    // 初始值
    Object.defineProperty(target, propertyKey, {
      get() {
        console.log(this._pValue)
        return this._pValue;
      },
      set(value) {
        this._pValue = value;
      },
      configurable: true,
      enumerable: true
    })
  }

}


class Greeter4 {

  @observer() foo: string = '123';


}


const g4 = new Greeter4();

g4.foo;
g4.foo = 'abc';
g4.foo;

