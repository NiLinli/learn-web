var str = "111";
console.log(str);
console.log(str.replace(/\d/, "a"));//replace方法比较懒 找到一个替换后就不再继续了
console.log(str.replace(/\d+/, "a"));
console.log(str.replace(/\d/g, "a"));//g global 全局


var str1 = '11v12v13v13'
console.log(str1.replace(/v/g,','));