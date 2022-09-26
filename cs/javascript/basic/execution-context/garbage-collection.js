// 在代码解析执行期间， Javasctipt 自动管理内存
// 垃圾收集器 定期检查

// 两种方式( 浏览器中)
// 1. mark-and-sweep 主流
// 没有context 需要的一律呗标记为 out of context 在下一次周期检查时候被回收

function foo(){
    //.....
}
// foo 只要被执行完 里面的生命周期结束了(垃圾) 也没有 context会访问的到 铁定被回收

// global context 中用完了 生命周期没有结束
var obj = {};
// do something 
obj = null; // free up the reference ,it's called dereferencing the value



// 2. reference counting 
// 如果没有人引用一个变量了 就计数为 0 可以清除了 

// 赋值给某个对象，原对象 -1 现有对象 +1
// 生命结束了/指向null 引用 -1

function normal(){
    var objA = new Object(); // 1
    // 1 的 new Object() + 1
    var objB = new Object(); // 2
    // 2 的 new Object() + 1

}
// 执行完了
// 1 2 随着函数执行完 生命周期结束 -1 -1 都为 0 回收了
normal();

function problem(){
    var objA = new Object(); // 1
    // 1 的 new Object() + 1
    var objB = new Object(); // 2
    // 2 的 new Object() + 1

    objA.someOtherObject = objB;
    // 2 的 new Object() + 1
    objB.anotherObject = objA;
    // 1 的 new Object() + 1
}
// 执行完了
// 1 2 随着函数执行完 生命周期结束(垃圾) -1 -1 都为 1 回收不了 只能放在垃圾堆 如果多次调用 problem() ->内存就爆炸了

