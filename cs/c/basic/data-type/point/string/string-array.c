#include <stdio.h>

int main(int argc, char const *argv[])
{

  // argc 为 参数个数
  // *argv[] 为参数字符串数组

  // unix 执行程序可以知道是怎么执行的
  // busybox

  int i;
  for (i = 0; i < argc; i++)
  {
    printf("第 %d 个参数： %s\n", i, argv[i]);
  }

  // a[0] 中装的指向某处的 point
  char *a[] = {
      "abck",
      "nixixixixix"};

  printf("a[0] = %p\n", a[0]);
  printf("a[0] = %s\n", a[0]);
}