#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#define N 4

void *thread(void *vargp);

int main()
{
  pthread_t tids[N];
  int i, *p;

  for (i = 0; i < N; i++)
  {
    p = malloc(sizeof(int));
    *p = i;
    pthread_create(&tids[i], NULL, thread, p);
  }

  for (i = 0; i < N; i++)
    pthread_join(tids[i], NULL);

  exit(0);
}

// void *thread(void *vargp)
// {
//   int myid = *((int *)vargp);
//   printf("Hello from thread %d\n", myid);
//   return NULL;
// }

void *thread(void *vargp)
{
  int myid = *((int *)vargp);
  free(vargp);
  printf("Hello from thread %d\n", myid);
  return NULL;
}
