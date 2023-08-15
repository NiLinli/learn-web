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


gcc -m32 int.c
gcc -m64 int.c