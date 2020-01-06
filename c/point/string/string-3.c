#include <stdio.h>

// 字符数组 p 可以直接格式化输出 string

int main(int argc, char const *argv[])
{
  char str_arr[] = "hello world";

  char *pMessage = "hello world";

  *(str_arr + 1) = 'a';
  pMessage[1] = 'a';
  printf("%s\n", str_arr);
  printf("%s\n", pMessage);

  return 0;
}
