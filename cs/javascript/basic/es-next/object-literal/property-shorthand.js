const name = 'nixixi';
const age = 18;

const p1 = {
  name: name,
  age: age,
  sayHello: function () {
    console.log(this.name + ' is ' + this.age + ' years old');
  }
};

const p2 = { 
  name,
  age,
  sayHello() {
    console.log(this.name + ' is ' + this.age + ' years old');
  }
};

console.log(p1, p2);

p1.sayHello();
p2.sayHello();