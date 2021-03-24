const vueComponent = {
  _props: {
    name: 'nilinli',
    age: 18,
  },
  _data: {
    sex: 1,
  },
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
