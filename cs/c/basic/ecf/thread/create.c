#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void *print_message_function(void *ptr);

int main()
{
  pthread_t ptid1, ptid2;
  char *message1 = "Thread 1";
  char *message2 = "Thread 2";
  int iret1, iret2;

  iret1 = pthread_create(&ptid1, NULL, print_message_function, (void *)message1);
  iret2 = pthread_create(&ptid2, NULL, print_message_function, (void *)message2);

  // Compare the two threads created
  if (pthread_equal(ptid1, pthread_self()))
    printf("Threads are equal\n");
  else
    printf("Threads are not equal\n");

  // synchronization
  pthread_join(ptid1, NULL);
  pthread_join(ptid2, NULL);

  printf("Thread 1 returns: %d\n", iret1);
  printf("Thread 2 returns: %d\n", iret2);

  // 等同于所有 thread 调用 pthread_exit
  exit(0);
}

void *print_message_function(void *ptr)
{
  char *message;
  message = (char *)ptr;
  printf("%s \n", message);
}