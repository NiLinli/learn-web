#include <stdio.h>

// %[flags][width][.prec][hlL]type
// hh 单个字节
// h  short
// l  long
// ll  long long
// lL  long double


int main() {

  printf("%d\n", 12345);
  printf("%hhd\n", 12345);  // 57
  // 12345
  // 0x3039
  // 39 -> 57

  return 0;
}