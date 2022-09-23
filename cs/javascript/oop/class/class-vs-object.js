// Class
// parent class
function Widget(args) {
  this.elem = args;
}

Widget.prototype.render = function() {
  // render element to html
}

// sub class
function Button(args) {
  Widget.call(this, args);
  // add ...
}

Button.prototype = Object.create(Widget);

Button.prototype.render = function() {
  Widget.prototype.render.call(this);
  // override ...
}

Button.prototype.onClick = function() {
  // add method
}


// Object 并不强调 parent child 关系, Widget 只是一个工具集合
const Widget2 = {
  init: function() {},
  render: function() {}
};

const Button2 = Object.create(Widget2);

Button2.setup = function() {}
// ...