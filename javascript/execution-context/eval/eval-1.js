// eval 创建的函数或者变量不会被扫描到

// hehe();  // 没有变量提升

var str1 = 'function hehe() {}';
eval(str1);
console.log(typeof hehe); // function


