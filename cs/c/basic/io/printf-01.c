#include <stdio.h>

// %[flags][width][.prec][hlL]type
// flag
// - 左对齐
// + 在前面添加数的正号(负号本来就会输出)
// space 正数留空
// 0     0 填充

int main() {

  printf("%9d\n", 123);
  printf("%-9d\n", 123);

  printf("%+9d\n", 123);
  printf("%+9d\n", -123);
  printf("%9d\n", -123);
  printf("%+-9d\n", 123);
  printf("%-+9d\n", 123);

  printf("%09d\n", 123);
  // printf("%-+9d\n", 123);

  return 0;
}