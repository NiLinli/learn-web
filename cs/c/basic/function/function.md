# function 和 程序结构



### 声明, 定义, 赋值

1. 声明：(不产生代码的东西) 说明变量的属性
   `external int a;`
   `int f(int a, int b);` 函数原型
2. 定义： (函数 + 全局变量) 说明变量的属性 + 存储器分配地址
   `int a;` 变量的定义(可以赋值, 也可以不赋值)
   `int f(int a, int b)` 函数定义(必须有函数体)

### 特点

1. arguments
2. return
3. 不是 first-class in C

### 编程原则

全局变量(外部变量)

函数之间数据交换

1. 全局变量方式
   - 使用场景:
     - 函数之间要大量共享变量的情况, 全局变量方便
     - 汇编程序留下来的习惯(没有本地变量)
   - 弊端: 导致函数之间有太多了数据联系
   - 结论: 尽可能少的使用全局变量在函数之间传递参数和结果, 使用全局变量和本地静态变量的函数是进程不安全的
2. 函数参数与返回值方式

### main 函数

1. main 函数的返回值是返回给调用者 (程序的执行环境)
2. `return 0` 表示正常中止, 非 0 表示异常或者错误
3. 可以省略, 但是程序最好向环境提供返回状态

unix: `echo $?` 查看程序运行的返回值

## 程序结构

### scope

- 作用域: 程序中可以使用该名字的部分
- external: 扩大全局变量的范围
- static: 限定范围(全局变量 + 函数)

1. 函数
   - 不声明可以在不同文件之间访问, 但是会有运行时错误产生(不在同一个文件当中编译时候检测不出来), 所以需要声明
   - 不需要使用 external
   - static 限制范围
2. 全局变量
   - 声明的地方开始, 带编译的文件末尾结束
   - 定义之前使用 / 不同文件访问, 必须要声明 external
   - static 限制范围

### 预处理器 preprocessor

c -> i 这个阶段, 原始的文本的替换

### `#include`

特点:

- 不是 C 语言的成分, 其他语言也可以使用
- 原始的文本替换 一般是一些声明和 macro 的定义
- `<>`
- `""` 先在当前目录中查找, 然后再和 `<>` 一样

编程规范:

1. 只有声明放入头文件中(约定)
2. 使用和定义的地方都应该引入头文件 .h
3. .c 的文件一般对应一个 .h
   - 放入公开的函数声明原型
   - 全局变量的声明 (extern)
4. 标准头文件结构, 防止重复声明

### `#define`