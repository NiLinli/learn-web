#include <stdio.h>
#include <unistd.h>

// stdin -> block read, Enter 开始调用函数
// stdout -> \n exit return 开始 flush
// stdio 和 stdout 都是文本操作

// char
void test_char()
{
  char a;
  while ((a = getchar()) != 0)
  {
    putchar(a);
  }
}

// string
void test_string()
{
  char str[100];
  printf("Enter a string :");
  gets(str);
  printf("\nYou entered: ");
  // 会添加 \n
  puts(str);
  puts(str);
}

void format_string()
{
  char name[30];
  int age;

  // io 替代 string 接收
  scanf("name = %s , age = %d", name, &age);
  printf("name = %s,age = %d\n", name, age);
}

int main(int argc, char const *argv[])
{
  // test_char();
  // test_string();
  format_string();
}
