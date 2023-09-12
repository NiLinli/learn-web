#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void *print_message_function(void *ptr);
void *creat_nested_t(void *ptr);

int main()
{
  pthread_t ptid;
  pthread_create(&ptid, NULL, creat_nested_t, NULL);
  pthread_join(ptid, NULL);

  printf("%s \n", "main finished!");

  pthread_exit(NULL);
  return 0;
}

void *creat_nested_t(void *ptr)
{
  pthread_t ptid1, ptid2;
  char *message1 = "Nested Thread 1";
  char *message2 = "Nested Thread 2";
  int iret1, iret2;

  // 线程中可以创建其他新的线程
  // 也可以嵌套 join

  pthread_create(&ptid1, NULL, print_message_function, (void *)message1);
  pthread_create(&ptid2, NULL, print_message_function, (void *)message2);

  pthread_join(ptid1, NULL);
  pthread_join(ptid2, NULL);

  printf("%s \n", "creat_nested_t finished!");

  pthread_exit(NULL);
}

void *print_message_function(void *ptr)
{
  char *message;
  message = (char *)ptr;
  printf("%s \n", message);
  pthread_exit(NULL);
}
