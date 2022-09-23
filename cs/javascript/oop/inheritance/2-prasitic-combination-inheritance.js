// Shape - 父类(superclass)
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // 父类的方法
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - 子类(subclass)
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // 子类续承父类
  Rectangle.prototype = Object.create(Shape.prototype);
  
  Rectangle.prototype.constructor = Object.defineProperty(Rectangle.prototype, 'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Rectangle
  });
  
  var rect = new Rectangle();
  
  console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
  rect.move(1, 1); // Outputs, 'Shape moved.'


  // 寄生混合继承
  // 1. prototype chain is kept intact
  // 2. instanceof 正常查找

  function F() {}
  F.prototype = o;
  return new F();