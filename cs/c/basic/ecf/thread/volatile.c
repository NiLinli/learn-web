#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void *thread(void *vargp);
void *thread2(void *vargp);

// volatile 一般用于防止编译器优化
// 避免优化副作用
int is_done = 0;
int cnt = 0;

int main()
{
  pthread_t tid1;
  pthread_t tid2;

  pthread_create(&tid1, NULL, thread, NULL);
  pthread_create(&tid2, NULL, thread2, NULL);

  while (1)
    ;
}

void *thread(void *vargp)
{
  for (int i = 0; i < 100000000; i++)
  {
    cnt++;
  }
  is_done = 1;
  return NULL;
}

void *thread2(void *vargp)
{

  // c 语言 未体现 不可见性
  while (!is_done)
    ;

  printf("done!!!, cnt = %d\n", cnt);
  return NULL;
}
