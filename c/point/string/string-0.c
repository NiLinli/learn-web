#include <stdio.h>

int main(int argc, char const *argv[])
{
  char str_arr[] = { 'i','\'' ,'m', ' ', 'n', 'l', 'l' };     // 字符数组, 不是字符串

  char str[] = { 'i','\'' ,'m', ' ', 'n', 'l', 'l', '\0' };   // C 中的字符串

  printf("str = %s\n", str);

  return 0;
}
