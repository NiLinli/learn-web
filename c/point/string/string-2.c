#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
  char line[] = "hello";

  printf("strlen(line) = %lu\n" , strlen(line)); // 5
  printf("sizeof(line) = %lu\n" , sizeof(line)); // 6


  char str1[] = "abc";
  char str2[] = "acc";

  printf("strcmp(str1, str2) = %d\n", strcmp(str1, str2)); // 1: str1 0:= -1:str2  大
  return 0;

  // 目标字符串内存空间是否足够?
  // strcpy 拷贝
  // stccat 链接

  // 安全替代
  // strncpy
  // strncat

  // 查找
  // strchr
  // strrchr
}
