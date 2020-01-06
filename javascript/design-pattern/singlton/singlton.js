// singleton -> 调用方法 
// 1. 无 创建一个instance
// 2. 有 返回instance

// 利用闭包实现 
// 全局暴露一个 命名空间 提供一个方法
// instance 放在空间里私有
// 全局中的方法可以访问这个instance


let mySingleton = (function () {
    //实例保持了Singleton的引用
    let instance;

    // 创建一个对象 by anyway
    function init() {
        // Singleton
        // 私有方法和变量
        function privateMethod() {
            console.log("I'm a private");
        }

        let privateVar = "I'm also private";
        let provateRandomNumber = Math.random();

        return {
            publicProperty: "I'm also a public",
            publicMethod: function () {
                console.log("The public can see me!");
            },
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance)
                instance = init();

            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA === singleB);

// 区分与静态实例
// js中
class Util{

}

Util.sayHello = function(){
    // ...
}

// 静态类： 不管你要不要 直接构建 浪费资源
// 单例模式： 延迟构建 需要的时候再构建