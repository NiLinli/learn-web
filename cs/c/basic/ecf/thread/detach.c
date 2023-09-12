#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void *func(void *arg)
{
  // detach the current thread from the calling thread
  // 不能再 join
  pthread_detach(pthread_self());

  printf("Inside the thread\n");

  // exit the current thread
  pthread_exit(NULL);
}

int main()
{
  pthread_t ptid;

  // Creating a new thread
  pthread_create(&ptid, NULL, &func, NULL);

  // segmentation fault
  // or wait forever
  pthread_join(ptid, NULL);
  printf("This line will be printed"
         " after thread ends\n");

  pthread_exit(NULL);

  return 0;
}
