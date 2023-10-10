#include <stdio.h>

#define M 5000
#define N 200

int sum_array_row(int a[M, N])
{
  int i, j, sum = 0;
  for (i = 0; i < M; i++)
    for (j = 0; j < N; j++)
      sum += a[i][j];

  return sum;
}

int sum_array_col(int a[M, N])
{
  int i, j, sum = 0;
  for (j = 0; j < N; j++)
    for (i = 0; i < M; i++)
      // no locality
      // 每次取值在内存中都相差 M
      sum += a[i][j];

    return sum;
}

int main(int argc, char const *argv[])
{

  return 0;
}
