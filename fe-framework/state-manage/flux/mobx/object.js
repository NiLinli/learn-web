const { observable, autorun, action } = require('mobx');

const person = observable({
  // observable 属性:
  name: 'John',
  age: 42,
  showAge: false,

  // 计算属性: 转变为 computed 属性
  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  },

  // 动作:
  setAge(age) {
    this.age = age;
  }
}, {
  setAge: action
});

// observer 观察者
autorun(() => console.log(person.labelText, 0));

person.name = 'Dave';

person.setAge(21);