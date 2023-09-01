#include <stdio.h>

void handle_array_two(int **a);
void handle_array_string(char **a);

int main(int argc, char const *argv[])
{

  // int *p[] -> [int*, int*]
  // int* 不能反推 int []
  int a = 1;
  int b = 2;
  int *p[2] = {&a, &b};

  int arr[2][3] = {
      {1, 2, 3},
      {4, 5, 6},
  };
  // incompatible pointer types passing 'int[2][3]' to parameter of type 'int **'
  // handle_array_two(arr);

  // char *p[] -> [char*, char*];
  char *p2[2] = {"hello", "char *"};
  handle_array_string(p2);

  // int(*p)[]; p -> &a []与数据定义保持一致
  int c[2] = {1, 2};
  int(*p3)[2] = &c;
  // incompatible pointer types initializing 'int *' with an expression of type 'int (*)[2]'
  int *p4 = &c;
  printf("p3 = %p\n", p3);
  printf("p4 = %p\n", p4);

  return 0;
}

// *a -> a[]
// 当作参数传递时候, 不能表示二维数组
// int *(*a) -x-> *(a[]) -x-> a[][]
void handle_array_two(int **a)
{
  printf("int a[][] print: \n");
  printf("%d\n", a[1][2]);
};

// 参数传递时候, 可以表示字符串数组
// char *(*a) -> *(a[]) -> *a[]
void handle_array_string(char **a)
{
  printf("char *p[2] print: \n");
  printf("%s\n", a[0]);
  printf("%s\n", a[1]);
}