#include <stdio.h>

// %[flag][type]
// flag
// * 跳过
// 数字 最大字符数
// hh  char
// h   short
// l   long double
// ll  long long
// L   long double 

// type

int main(int argc, char const *argv[]){
  // int a;
  // scanf("%*d %d", &a);
  // printf("a = %d\n\n", a);

  int b;

  int r1, r2;
  r1 = scanf("%i", &b);  // i 可以判断 0 0x 等
  r2 = printf("b = %d\n\n", b);

  printf("r1 = %d , r2 = %d\n", r1, r2);

}

// 返回值
// printf 打印字符数
// scanf  输入字符数 char
