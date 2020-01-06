#include <stdio.h>

int main(int argc, char const *argv[])
{
  // 不同 shell 对逃逸字符处理方式不同

  // \b
  printf("abc\b\n");    // 回退一格 backspace
  printf("ABC\bD\n");   // 回退一格并且输入, 会覆盖

  // \t 制表位
  printf("abc\tdef\too\n");
  printf("ab\tdefgh\too\n");
  
  // \n 换行 \b回车(回退到一行的开始)
  // \n 在 C => \b\n

  return 0;
}
