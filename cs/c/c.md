# C

## 标准

1. K&R C
2. ANSI C(最新为 C99)

## 编译

### 编译器

unix: cc
linux: gcc (GUN C)
window: dev c++

`cc hello-world.c`

### 编译选项

- -E：仅执行编译预处理 (不输出任何文件) c -> i
- -S：将 C 代码转换为汇编代码 c -> s
- -c：仅执行编译操作，不进行连接操作 c -> o
- -o：链接 (构建) o -> out
- --save-temps 保留过程中的所有文件
- -wall：显示警告信息

### 编译过程

1. .c 源代码 (.c 文件称为一个编译单元)
2. .i 预编译文件
3. .s 汇编代码文件
4. .o 目标文件 单个
5. .out 链接成可执行文件

### 编译方式

#### 全量编译

`gcc testfun.c test.c -o a.out`    
`gcc *.c a.out`

改变其中一个文件所有的都需要重新编译

#### 增量编译

1. 每个文件单独编译

- `gcc -c testfun.c` 将 testfun.c 编译成 testfun.o
- `gcc -c test.c`    将 test.c 编译成 test.o

2. 然后再进行链接

- `gcc -o testfun.o test.o -o test` #将 testfun.o 和 test.o 链接成 test

改变其中一个文件只需要编译那一个文件并且链接

## 执行

定义 main 函数为程序的入口
