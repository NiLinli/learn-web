// Objects can be created with object literals

// ES3 实现
Object.myCreate = function ( o ) {
    function F() {}  
    F.prototype = o; // 将函数的参数对象作为新建对象的构造函数的 prototype
    return new F(); 
};

// 以某个原型创建一个对象
// 对象只含有原型上面的属性 + 方法, 与 constructor 无关


let o = { name: 'nixixi', age: 20, gender: 'man' };
let obj = Object.myCreate( o );     // inherits property

console.log(obj);
console.log(Object.getPrototypeOf(obj) === o);

// null
// 创建一个没有 prototype 的空对象
let o2 = Object.create(null);

try {
    o2.toString();
} catch (error) {
    console.log(error.name);
}


