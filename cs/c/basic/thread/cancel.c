#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <unistd.h>

void *busy_work(void *t)
{
  int i;
  long tid;
  double result = 0.0;
  tid = (long)t;
  printf("Thread %ld starting...\n", tid);
  for (i = 0; i < 1000000; i++)
  {
    result = result + sin(i) * tan(i);
    if (i > 999990)
      sleep(1); // 不是突然中断, 碰到特定的条件才会取消
    else
      printf("Thread %ld process. i = %d\n", tid, i);
  }
  printf("Thread %ld done. Result = %e\n", tid, result);
  pthread_exit(NULL);
}

int main()
{
  pthread_t ptid;

  // Creating a new thread
  pthread_create(&ptid, NULL, &busy_work, NULL);

  sleep(1);

  if (pthread_cancel(ptid) != 0)
  {
    fprintf(stderr, " pthread_cancel failed\n");
  }

  pthread_join(ptid, NULL);
  printf("This line will be printed after thread ends\n");
  pthread_exit(NULL);

  return 0;
}
