#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

// global variable
char **ptr;

void *thread(void *vargp);

int main()
{
  pthread_t tid;
  int i;
  char *msgs[2] = {
      "hello from foo",
      "hello from bar"};

  ptr = msgs;

  for (i = 0; i < 2; i++)
    pthread_create(&tid, NULL, thread, (void *)i);

  pthread_exit(NULL);
}

void *thread(void *vargp)
{
  int myid = (int)vargp;
  static int cnt = 0;

  printf("[%d]: %s (cnt = %d) \n", myid, ptr[myid], ++cnt);
  return NULL;
}