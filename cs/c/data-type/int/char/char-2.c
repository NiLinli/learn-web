#include <stdio.h>

int main(int argc, char const *argv[])
{
  char a = '\0';
  // char b = '';  // 不能这样表示空字符

  int a1 = 0;

  printf("a = '%c'\n", a);
  printf("a = %d\n", a);

  printf("a1 == a ? %d\n", a1 == a);

  return 0;
}

// 3. 空字符表示 `'\0'` 非`''`
//    - 等于整数 0
//    - char a = 0 一个字节
//    - 不是 int a = 0 四个字节
