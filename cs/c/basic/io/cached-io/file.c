#include <stdio.h>
#include <stdlib.h>

// 无特殊处理
// fopen/fread/fwrite/fseek/fclose
// fflush
// 文本处理
// fgetc/fputc -> bytes
// fgets/fputs -> line
// fscanf/sscanf -> 格式化输入
// fprintf/sprintf -> 格式化输出 文件/buffer

// s 开头 处理字符串
// f 开头 处理文件/文本文件
// 其他 标准输入输出

void test_fopen()
{
  // r read 文件不存在报错

  // truncate 截断为 0 长度, 即清空
  // 不存在文件创建新的文件 w a w+
  // wx ax wx+ 只能新建, 存在不能打开, 防止 truncate

  // w write: truncate
  // a append
  // r+: 文件不存在报错, 并且从 0 开始写不会 truncate
  // w+: truncate

  // fopen 正确返回即返回 fd
  // 异常返回 0x0, 所以通过 if else 判断
  FILE *fp = fopen("data/123.in", "r");

  if (fp)
  {
    int num;
    fscanf(fp, "%d", &num);
    printf("%d\n", num);
    fclose(fp);
  }
  else
  {
    printf("无法打开文件\n");
  }

  FILE *fp_x = fopen("data/123.in", "wx");

  if (fp_x)
  {
    printf("不存在 已经新建\n");
  }
  else
  {
    printf("已经存在, 不能 w 或者 w+\n");
  }
}

void test_char()
{
  FILE *fp = fopen("data/origin.txt", "r");
  char a;

  // 返回值是 char -> int
  // getc 和 fgetc 一致
  while ((a = fgetc(fp)) != EOF)
  {
    fputc(a, stdout);
  }
}

void test_string()
{
  FILE *fp = fopen("data/origin.txt", "r");
  char str[20];
  // 第二个参数是最大读取字节 max, 遇到下面
  // max
  // EOF
  // \n
  // 读取结束
  while (fgets(str, 19, fp) != NULL)
  {
    fputs(str, stdout);
  }
}

// s begin => string
// f begin => string -> io
// 只做数据格式化, 不输出数据
void format_string()
{
  char name[30];
  int age;
  // 以空格作为分割, 多个空格和单个空格效果一致
  sscanf("name =    nixixi , age = 18", "name = %s , age = %d", name, &age);

  printf("%d\n", age);

  char output_str[30];
  sprintf(output_str, "name = %s,age = %d\n", name, age);

  fputs(output_str, stdout);

  // io 替代 string 接收
  fscanf(stdin, "name = %s , age = %d", name, &age);
  fprintf(stdout, "name = %s,age = %d\n", name, age);
}

void flush_stdout()
{
  putc(0xF0, stdout);
  putc(0x9F, stdout);
  putc(0x98, stdout);
  putc(0x8A, stdout);
  fputs("😊", stdout);
  // \n flush stdout 缓存
  putc('\n', stdout);
  putc(0xF0, stdout);
  // 需要 debugger 才能看出 flush 了, 不然会和后面的字符结合显示
  fflush(stdout);
  putc(0x9F, stdout);
  putc(0x98, stdout);
  putc(0x8A, stdout);
  return ;
}

int main()
{
  // test_fopen();
  // test_char();
  // test_string();
  // format_string();
  flush_stdout();
}

// %[flags][width][.prec][hlL]type
// width 和 prec
// width 为总长度             整数 + 小数
// prec  为小数部分的长度      小数
// printf("%*d\n", 8, 123); // * 号的值为 8, 达到动态设置 width 的效果
// printf("%8.4f\n", 123.23);

// %[flags][width][.prec][hlL]type
// hh 单个字节
// h  short
// l  long
// ll  long long
// lL  long double
// printf("%d\n", 12345);
// printf("%hhd\n", 12345); // 57
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