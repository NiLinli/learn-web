#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

#define NITERS 1000000
#define TIDS 9

void *thread(void *vargp);

long cnt = 0;
sem_t *mutex;

int main(int argc, char **argv)
{
  pthread_t tids[TIDS];

  if ((mutex = sem_open("sem0", O_CREAT, 0644, 1)) < 0)
  {
    fprintf(stderr, "sem_open error");
    exit(0);
  }

  int i;
  for (i = 0; i < TIDS; i++)
    pthread_create(&(tids[i]), NULL, thread, NULL);

  for (i = 0; i < TIDS; i++)
    pthread_join(tids[i], NULL);

  if (cnt != (TIDS * NITERS))
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
