# Exception

Exception: exceptional event

- when execution of a program
- an event
- disrupts the normal flow of the program's instructions

class 继承结构

- Object
	- Throwable
		- Error(unchecked) JVM 本身发生错误, 一般无法恢复
		- Exception
			- RuntimeException(unchecked) 程序运行代码发生的错误

## 处理异常

runtime system 寻找调用栈, 就近选择处理异常 

程序中异常的处理

- try-catch
	- catch 块可以写多个区分不同的 Exception
	- catch 块参数可以用 super Exception 多态定义
- throw 声明异常, 不处理, 给第三方调用, 不适合在当前程序处理, 
	- checked exception
		- 编译器检查
		- 设计者认为方法的 Exception 和 parameters/return value 一样重要, 需要声明给调用方
	- unchecked exception 
		- 不需要声明, 不会被检查
		- 适用于 RuntimeException 类型的异常 无法预知异常所以无法覆盖异常 声明没有什么实质意义而且很繁琐

## Exception object

抛出的异常都是继承自 Throwable 的对象

