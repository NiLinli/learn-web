// any
let a: any = {
  sayHello: function () {},
};

a.sayHello();

let b: Object = {
  sayHello: function () {},
};

// b.sayHello(); // fail


// unknown