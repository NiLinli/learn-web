#include <stdio.h>
#include <string.h>

int main() {
  char c1 = 'a';
  char c2 = 'a';
  printf("c1 == c2 is %d\n", c1 == c2);   // 字符是整型, 可以比较

  char str1[] = "hello";
  char str2[] = "hello";
  printf("str1 == str2 is %d\n", str1 == str2); //  array comparison always evaluates to false
  printf("strcmp(str1, str2) is %d\n", strcmp(str1, str2)); // 结果为 0 表示两个字符串相等

}