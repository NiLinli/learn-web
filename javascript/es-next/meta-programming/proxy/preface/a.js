const vueComponent = {
  _props: {
    name: 'nilinli',
    age: 18,
  },
  _data: {
    sex: 1,
  },
  _other: {
    a: 'a',
    b: 'b',
  },

  // get age() {
  //   return this._props.name;
  // },
  // set age(val) {
  //   this._props.name = val;
  // },

  // get age() {
  //   return this._props.age;
  // },
  // set age(val) {
  //   this._props.age = val;
  // },
};

// 访问 vueComponent.name 等同于访问 vueComponent._props
// vueComponent 代理 vueComponent._props

// console.log(vueComponent.age);

function proxy(target, source, key) {
  const propertyDefinition = {
    enumerable: true,
    configurable: true,
    get: null,
    set: null,
  };

  propertyDefinition.get = function () {
    return source[key];
  };

  propertyDefinition.set = function (val) {
    source[key] = val;
  };

  Object.defineProperty(target, key, propertyDefinition);
}

// 缺点: 只能代理属性, 需要遍历对象代理
for (const key in vueComponent._props) {
  if (Object.hasOwnProperty.call(vueComponent._props, key)) {
    proxy(vueComponent, vueComponent._props, key);
  }
}

for (const key in vueComponent._data) {
  if (Object.hasOwnProperty.call(vueComponent._data, key)) {
    proxy(vueComponent, vueComponent._data, key);
  }
}

proxy(vueComponent, vueComponent._props);
proxy(vueComponent, vueComponent._data);

console.log(vueComponent.age);
console.log(vueComponent.sex);

// for (const key in vueComponent._other) {
//   if (Object.hasOwnProperty.call(vueComponent._other, key)) {
//     vueComponent[key] = new Proxy(vueComponent._other[key]);
//   }
// }

// console.log(vueComponent.a);
