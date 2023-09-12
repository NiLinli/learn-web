#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define NITERS 100000000

void *thread(void *vargp);

volatile long cnt = 0;

int main(int argc, char **argv)
{

  pthread_t tid1, tid2;

  pthread_create(&tid1, NULL, thread, NULL);
  pthread_create(&tid2, NULL, thread, NULL);
  pthread_join(tid1, NULL);
  pthread_join(tid2, NULL);

  if (cnt != (2 * NITERS))
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
