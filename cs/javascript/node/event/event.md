# event

## EventEmitter

所有能触发事件的对象都是 EventEmitter 类的实例
on() 函数注册事件处理程序 --> subscribe
emit() 触发事件 --> next
事件名称通常是驼峰式的字符串, 但也可以使用任何有效的 JavaScript 属性名

按照注册顺序同步调用监听器

once() 调用一次

应该始终为 'error' 事件注册监听器, 不然触发 error 的时候, 会报错, 推出 Node 进程

extends EventEmitter 会使得创建的 instance 为观察者模式中的 subject
