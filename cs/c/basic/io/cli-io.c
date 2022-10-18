#include <stdio.h>

// scanf 输入文本解释为程序基本类型
// printf 程序基本类型转成文本输出

int main(int argc, char const *argv[])
{

  // getchar & putchar 读取一个 char(byte)
  // int c;
  // printf("Enter a value :");
  // c = getchar();
  // printf("\nYou entered: ");
  // putchar(c);
  // printf("\n");
  // return 0;

  // gets & puts 读取一行
  // char str[100];
  // printf("Enter a value :");
  // gets(str);
  // printf("\nYou entered: ");
  // puts(str);
  // return 0;

  // scanf 根据 format 产生输出
  // char str[100];
  // int i;
  // printf("Enter a value :");
  // scanf("%s %d", str, &i);
  // printf("\nYou entered: %s %d ", str, i);
  // printf("\n");
  // return 0;


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

  // int r1, r2;
  // r1 = scanf("%i", &b); // i 可以判断 0 0x 等
  // r2 = printf("b = %d\n\n", b);

  // printf("r1 = %d , r2 = %d\n", r1, r2);

  // %[flags][width][.prec][hlL]type
  // flag
  // - 左对齐
  // + 在前面添加数的正号(负号本来就会输出)
  // space 正数留空
  // 0     0 填充
  printf("%9d\n", 123);
  printf("%-9d\n", 123);

  printf("%+9d\n", 123);
  printf("%+9d\n", -123);
  printf("%9d\n", -123);
  printf("%+-9d\n", 123);
  printf("%-+9d\n", 123);
  printf("%09d\n", 123);

  // %[flags][width][.prec][hlL]type
  // width 和 prec
  // width 为总长度             整数 + 小数
  // prec  为小数部分的长度      小数
  printf("%*d\n", 8, 123); // * 号的值为 8, 达到动态设置 width 的效果
  printf("%8.4f\n", 123.23);

  // %[flags][width][.prec][hlL]type
  // hh 单个字节
  // h  short
  // l  long
  // ll  long long
  // lL  long double
  printf("%d\n", 12345);
  printf("%hhd\n", 12345); // 57
  // 12345
  // 0x3039
  // 39 -> 57

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

  int number;
  printf("%dheheda%n\n", 12345, &number); // %n 统计输出个数
  printf("number = %d\n\n", number);

  int a = 12345;
  printf("%d\n", a);
  printf("%i\n", a);
  printf("%u\n", a);
  printf("%o\n", a);
  printf("0x%x\n", a);
  printf("%e\n\n", a);

  float b = 12334521312312.123;
  printf("%f\n", b);
  printf("%F\n", b);
  printf("%g\n", b);
  printf("%G\n", b);
  printf("%a\n", b);
  printf("%A\n", b);
}

// 返回值
// printf 打印字符数
// scanf  输入字符数 char
