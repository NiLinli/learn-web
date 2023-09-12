#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

#define NITERS 1000000

void *thread(void *vargp);

volatile long cnt = 0;
sem_t *mutex;

int main(int argc, char **argv)
{

  pthread_t tid1, tid2;

  mutex = sem_open("sem0", O_CREAT, 0644, 1);

  // if (sem_init(&mutex, 0, 1) < 0)
  // {
  //   fprintf(stderr, "Sem_init error");
  //   exit(0);
  // }

  pthread_create(&tid1, NULL, thread, NULL);
  pthread_create(&tid2, NULL, thread, NULL);
  pthread_join(tid1, NULL);
  pthread_join(tid2, NULL);

  if (cnt != (2 * NITERS))
    printf("BOOM! cnt=%ld\n", cnt);
  else
    printf("OK cnt=%ld\n", cnt);

  sem_close(mutex);
  exit(0);
}

void *thread(void *vargp)
{
  long i;

  for (i = 0; i < NITERS; i++)
  {
    // P Proberen 测试🇳🇱
    // >0 减去 1
    // =0 waiting
    // 上面的测试和 减1是不可分割的
    // 某个线程执行时为 1, 1 - 1 = 0 然后返回, 执行下面的语句
    // 其他线程进入时都为 0 进行等待, 🔒住了
    if (sem_wait(mutex) < 0)
    {
      fprintf(stderr, "sem_wait error");
      exit(0);
    }

    cnt++;
    // V Verhogen 增加🇳🇱
    // 能执行到这里的都是 0
    // 0 + 1 = 1 unlock
    if (sem_post(mutex) < 0)
    {
      fprintf(stderr, "sem_post error");
      exit(0);
    }
  }
  return NULL;
}
