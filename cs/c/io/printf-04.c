#include <stdio.h>

// %[flags][width][.prec][hlL]type
// type
// d i  --> int
// u    --> unsigned int
// o    --> octal
// x/X  --> hex
// e/E  --> 指数

// f/F  --> float
// g/G  --> float 指数
// a/A  --> hex float

// c    --> char
// s    --> string

// p    --> point

// n    --> printf 读入/写出的个数



int main() {

  int number;
  printf("%dheheda%n\n", 12345, &number); // %n 统计输出个数
  printf("number = %d\n\n", number);


  int a = 12345;
  printf("%d\n",a);
  printf("%i\n",a);
  printf("%u\n",a);
  printf("%o\n",a);
  printf("0x%x\n",a);
  printf("%e\n\n",a);

  float b = 12334521312312.123;
  printf("%f\n", b);
  printf("%F\n",b);
  printf("%g\n",b);
  printf("%G\n",b);
  printf("%a\n",b);
  printf("%A\n",b);


  return 0;
}