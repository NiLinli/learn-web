#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define NITERS 1000000
#define TIDS 9

void *thread(void *vargp);

// volatile
// 内存映射IO 使用副作用
// 信号处理函数

volatile long cnt = 0;

int main(int argc, char **argv)
{

  pthread_t tids[TIDS];

  int i;
  for (i = 0; i < TIDS; i++)
    pthread_create(&(tids[i]), NULL, thread, NULL);

  for (i = 0; i < TIDS; i++)
    pthread_join(tids[i], NULL);

  if (cnt != (TIDS * NITERS))
    printf("BOOM! cnt=%ld\n", cnt);
  else
    printf("OK cnt=%ld\n", cnt);
  exit(0);
}

void *thread(void *vargp)
{
  long i;

  for (i = 0; i < NITERS; i++)
    cnt++;

  // cnt++ 拆解为三条指令
  // ## %bb.2:                               ##   in Loop: Header=BB1_1 Depth=1
  // movq	_cnt(%rip), %rax
  // addq	$1, %rax
  // movq	%rax, _cnt(%rip)

  // 同步执行指令
  // 但是没有同步执行语句

  return NULL;
}
