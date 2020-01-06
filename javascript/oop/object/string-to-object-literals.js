var data = '[ { "name": "张三", "age": 19, "gender": "男"}, { "name": "李四", "age": 18, "gender": "女"} ]';

//  json 格式( 严格的国际通用数据表示协议, 结构 )
//  在 js 中使用的 json 对象, 相对较松散
// json 格式 有两种结构
//	1: {} A collection of name/value pairs   js中理解为对象
// 	2: [] An ordered list of values  js中理解为数组
// 注意: json 格式中, 键名也必须使用双引号括起来

// eval 不推荐
var o1 = eval('(' + data + ')');
console.log(o1 instanceof Array);

// new Function
var o2 = new Function("return " + data)();
console.log(o2);
console.log(o2 instanceof Array);

// JSON.parse
var o3 = JSON.parse(data);
console.log(o3);
console.log(o3 instanceof Array);