// 这种方式比较挫，不算真正意义上面的继承
// 只是把别人原型上面的对象拷贝过来

// Shape - 父类(superclass)
function Shape() {
	this.x = 0;
	this.y = 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};

Shape.prototype.reset = function () {
	this.x = 0;
	this.y = 0;
}


// Rectangle - 子类(subclass)
function Rectangle() {
	Shape.call(this); // call super constructor.
}

// mixin 混入
Rectangle.prototype.mixin = function (obj) {
	for (var k in obj) {
		if (!(k in this)) {
			this[k] = obj[k];
		}
	}
};

// 子类续承父类
Rectangle.prototype.mixin({
	...Shape.prototype,
	reset: function() {
		Shape.prototype.reset.call(this);
		console.log('override method.')
	}
});

Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // false

rect.move(1, 1); // Outputs, 'Shape moved.'
console.log(rect.x, rect.y);
rect.reset();
console.log(rect.x, rect.y);