#include <stdio.h>
#include <stdlib.h>

int main()
{

  // c99
  // int number;
  // scanf("%d", &number);
  // int c99_arr[number];
  // printf("c99_arr's size length is %d  \n", sizeof(c99_arr)/sizeof(int));

  int number;
  scanf("%d", &number);

  // malloc 返回值 void * 不知道 类型的指针 (内存不知道类型, 内存只是一段连续的空间)
  // malloc 完全可以作为数组使用
  int *a = (int *)malloc(number * sizeof(int));

  for (int i = 0; i < number; i++)
  {
    scanf("%d", &a[i]);
  }

  for (int i = number - 1; i >= 0; i--)
  {
    printf("%d ", a[i]);
  }
  printf("\n");

  // 动态分配的内存必须手动释放
  // free 只能释放 malloc 空间
  free(a);

  return 0;
}