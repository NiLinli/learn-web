# OOP

## OOP in JS

- object literas
- constuctor form

**everything in JavaScript is an object is mistake in JS**

- primitive type
- object
  - Object
  - Primitive Wrapper
  - Array
  - Function
  - Date
  - RegExp
  - Error
  - ...

## Object

定义

- An object is an **unordered** collection of properties
- dynamic -- properties can usually be added and deleted

property 定义

- value
  - any Javascript value
  - getter/setter
- property attribute: writeable / enumerable / configurable

property access: performs a `[[Get]]` operation, `[[Get]]` 算法

1. 当前对象
2. traversal of the `[[Prototype]]` chain
3. 上述找不到, 返回 undefined

assignment to a property: invoke `[[Put]]` to set or create that property on the object in question

1. 是否是 accessor descriptor, 是的 call setter
2. writable 是否为 false
3. 赋值

1. Object.prototype
  - hasOwnProperty
    - for-in 过滤原型属性
  - toString
    - Object.prototype.call(arr) 判断数组... `[object Object]` `[object Array]`
  - valueOf
    - 不同类型运算( == )先 valueOf , 后 toString
    - 改写 valueOf 或者 toString 方法 , 返回值 hack boring something
2. Object static method
  - keys
  - getOwnPropertyNames

## object literas

访问 properties

key 只有 string 和 symbol 两种类型, 其他类型会自动调用 toString 方法

1. [] 接受变量 + 字面量 (string symbol)
2. .  更加简洁, 适用于常规情况

## constructor

- constructor property
- constructor(class): any function called with the new keyword in front of it.
  - function are not constructs
  - function calls(new) are constructor calls

## prototype

- The top-end of every normal `[[Prototype]]` chain is the built-in Object.prototype.  所以这个原型上面有很多方法

## Class

no classes in Js, just sugar. only has object.

class semantics

- new keyword
- executing a constructor method of a class
- object has constructor property ("constructor" does not actually mean "was constructed by")

### other

This object is a copy of all the characteristics described by the class.  
A class is instantiated into object form by a copy operation.

- class - 'blue print'
- new - 'building'
- object(instance) - 'construction'

### js

JS creates a link between two objects, where one object can essentially delegate property/function access to another object.
"Delegation"  is a much more accurate term for JavaScript's object-linking mechanism.

### inheritance

mixin


实现继承 in JS

1. steal constructor
   - 调用父类的 constructor (使用 call 更改 this 指向)
   - 添加子类特有的代码
2. 更改 prototype chain 指向(更改 constructor 的 prototype 指向)
   - 新建一个对象, 该对象指向父类的 prototype (Object.create)
   - 将子类 prototype 指向新建的对象

## Reflect

1. Reflect.* 只能操作 object, 不能操作基本类型
2. Object.* 对于非 object 会转换成 object, 再进行操作
3. throw error/return 设计不一样

## Proxy

1. **Proxy 不能 polyfilled**
2. Proxy 会转发到 target 进行处理
3. hanlder 未处理的会直接在 target 执行和 proxy 相同的操作
4. 可以结合 API 设计相同的 Reflect 使用
