# C

过程 + 结构化  
C 语言程序由 函数 + 全局变量 组成, 其他语言会有相应的扩展   
函数不是 first-class

## 标准

1. K&R C
2. ANSI C(最新为 C99)

## 编译

32/64 位程序取决于程序是如何编译的, 而不是程序运行的机器是多少位  

编译器

- unix: cc
- linux: gcc (GUN C)
- window: dev c++

编译过程

1. .c 源代码 (.c 文件称为一个编译单元)
2. .i 预编译文件
3. .s 汇编代码文件
4. .o 目标文件 单个
5. .out 链接成可执行文件

```sh
# Preprocessing
gcc -E test.c -o test.i

# Assembly
gcc -S test.i/test.c -o test.s

# Compile
gcc -c test.s/test.i/test.c -o test.o

# Linking
gcc test.o -o test.out

# Debug
gcc -g 

gcc test.o \
  # 保留过程中的所有文件
  --save-temps \ 
  # 显示警告信息
  -wall \ 
  -o test.out

# 全量编译 => 改变其中一个文件所有的都需要重新编译
gcc testfun.c test.c -o a.out
gcc *.c -o a.out

# 增量编译 => Makefile
## 改变什么编译什么
gcc -c testfun.c
gcc -c test.c
## 然后 Linking
gcc -o testfun.o test.o -o test
```

## 执行

寻找 out 中的唯一的 main 函数执行
