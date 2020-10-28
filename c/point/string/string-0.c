#include <stdio.h>

int main(int argc, char const *argv[])
{
  char str_arr[] = { 'i','\'' ,'m', ' ', 'n', 'l', 'l' };     // 字符数组, 不是字符串

  char str[] = { 'i','\'' ,'m', ' ', 'n', 'l', 'l', '\0' };   // C 中的字符串

  printf("str = %s\n", str);

  return 0;
}

// '\0' 结尾是 空 的 char 数组为字符串
// ASCII 编码码点为 0 对应的字符, 不是指数字 0 对应的字符
// %s 格式化输出