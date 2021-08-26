# hello world

C 语言程序由 函数 + 全局变量 组成

1. 函数: 包含一些语句, 指定所要执行的计算操作
2. 全局变量: 常用于存储计算过程中使用的值

每个 C 程序必须有一个 main 函数, 作为程序的起点(入口文件)

## 编译器

unix: cc
linux: gcc (GUN C)
window: dev c++

`cc hello-world.c`

编译选项

- -E：仅执行编译预处理 (不输出任何文件) c -> i
- -S：将C代码转换为汇编代码 c -> s
- -c：仅执行编译操作，不进行连接操作 c -> o
- -o：链接 (构建) o -> out
- --save-temps 保留过程中的所有文件
- -wall：显示警告信息

编译过程

1. .c 源代码 (.c 文件称为一个编译单元)
2. .i 预编译文件
3. .s 汇编代码文件
4. .o 目标文件 单个
5. .out 链接成可执行文件

编译(链接)方式

1. 一步到位, 改变其中一个文件所有的都需要重新编译
    - `gcc testfun.c test.c -o test`
2. 每个文件单独编译, 然后再进行链接, 改变其中一个文件只需要编译那一个文件并且链接
    - `gcc -c testfun.c`    #将testfun.c编译成testfun.o
    - `gcc -c test.c`       #将test.c编译成test.o
    - `gcc -o testfun.o test.o -o test`    #将testfun.o和test.o链接成test

## 执行

`./a.out`
