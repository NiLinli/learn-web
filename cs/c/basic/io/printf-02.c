#include <stdio.h>

// %[flags][width][.prec][hlL]type

// width 和 prec
// width 为总长度             整数 + 小数
// prec  为小数部分的长度      小数

int main() {

  printf("%*d\n", 8, 123);    // * 号的值为 8, 达到动态设置 width 的效果
  printf("%8.4f\n", 123.23);

  return 0;
}