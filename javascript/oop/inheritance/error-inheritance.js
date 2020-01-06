function Foo() {}

Foo.prototype.sayHello = function()  {
  console.log('sayHello');
}


function Bar() {}

// error
Bar.prototype = Foo.prototype;
// ok
// Bar.prototype = Object.create(Foo.prototype);
// 不合适
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);

let bar1 = new Bar();
bar1.sayHello();

// 但是不能在子类中 override method 和 add method
// 会影响父类

Bar.prototype.someMethod = function() {
  console.log('omg...');
};

let foo1 = new Foo;
foo1.someMethod();