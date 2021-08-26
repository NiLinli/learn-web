#include <stdio.h>

// 编译时采用不同的 CPU
// -m32 
// -m64(默认)

int main(int argc, char const *argv[]) {
  int a = 123;
  short int b = 456;
  float f = 12.999;

  // 检查变量
  printf("a's size is %ld \n", sizeof(a));
  printf("b's size is %ld \n", sizeof(b));
  printf("f's size is %ld \n", sizeof(f));

  // 检查类型
  printf("sizeof(short) is %ld \n", sizeof(short));              // 2
  printf("sizeof(int) is %ld \n", sizeof(int));                  // 4
  printf("sizeof(long) is %ld \n", sizeof(long));                // 4 8
  printf("sizeof(long long) is %ld \n", sizeof(long long));      // 8
  printf("sizeof(float) is %ld \n", sizeof(float));              // 4
  printf("sizeof(double) is %ld \n", sizeof(double));            // 8
  printf("sizeof(long double) is %ld \n", sizeof(long double));  // 16

  // 静态运算符: 结果在编译的时刻就决定了
  // 不要在 sizeof 里面做运算, 不会运行, 编译的过程就判断运算结果的类型
  int c = 4;
  printf("sizeof(c++) = %lu\n",
         sizeof(c++));    // expression with side effects has no effect in an
                          // unevaluated context
  printf("c = %d\n", c);  // 4

  printf("sizeof(c + 1.0) = %lu\n", sizeof(c + 1.0));  // 8

  return 0;
}


// sizeof(short) is 2 
// sizeof(int) is 4 
// sizeof(long) is 8 
// sizeof(long long) is 8 
// sizeof(float) is 4 
// sizeof(double) is 8 
// sizeof(long double) is 16 