// 1. 通过匿名函数形成闭包 (在JavaScript中，函数是创建作用域的唯一方式)  --> 变量名冲突问题
// 2. 返回需要导出的变量

let module1 = (function ($) {

  let ajax = $.ajax;

	let _count = 0;
	let m1 = function () {
		//...
	};

	let m2 = function () {
		//...
	};

  // 
	return {
		m1: m1,
		m2: m2
	};
})(jQuery);   // 传入全局变量的方式


console.log(module1)
console.log(module1.m2());
console.log(module1._count);
