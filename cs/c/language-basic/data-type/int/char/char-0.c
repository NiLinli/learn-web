#include <stdio.h>

int lower(int c);

int main(int argc, char const *argv[])
{
  char a;
  char b;

  a = 2;
  b = '2';

  printf("a == b? %d \n", a == b);  // 不想等

  printf("a = %d\n", a);
  printf("b = %d\n", b);      // char 即使 int , 也是 char

  printf("a = '%c'\n", a);
  printf("b = '%c'\n", b);

  printf(" 49 == '1' ? %d\n", 49 == '1');

  // 字符计算
  printf("'a' - 'A' = %d\n", 'a' - 'A');

  char c = 'b';

  printf("'A' lowercase is %c\n", lower('A'));

  return 0;
}

int lower(int c) {

  if (c >= 'A' && c <= 'Z') {
    return c + 'a' - 'A';
  } else {
    return c;
  }
}
