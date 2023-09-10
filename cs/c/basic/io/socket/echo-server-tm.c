#include "network.h"

void *thread(void *vargp);

int main(int argc, char **argv)
{
  int listenfd, *connfdp;
  socklen_t clientlen;
  struct sockaddr_storage clientaddr; /* Enough space for any address */
  char client_hostname[MAXLINE], client_port[MAXLINE];
  pthread_t tid;

  if (argc != 2)
  {
    fprintf(stderr, "usage: %s <port>\n", argv[0]);
    exit(0);
  }

  listenfd = open_listenfd(argv[1]);

  if (listenfd < 0)
  {
    fprintf(stderr, "open_listenfd error\n");
    exit(0);
  }

  while (1)
  {
    clientlen = sizeof(struct sockaddr_storage);

    connfdp = malloc(sizeof(int));
    *connfdp = accept(listenfd, (struct sockaddr *)&clientaddr, &clientlen);

    if (*connfdp < 0)
    {
      fprintf(stderr, "Accept error\n");
      exit(0);
    }

    getnameinfo((struct sockaddr *)&clientaddr, clientlen, client_hostname, NI_MAXHOST,
                client_port, NI_MAXSERV, 0);
    printf("Connected to (%s, %s)\n", client_hostname, client_port);

    // 创建一个新的线程
    if (pthread_create(&tid, NULL, thread, connfdp) != 0)
    {
      fprintf(stderr, "pthread_create error");
      exit(1);
    }
  }
  exit(0);
}

void *thread(void *vargp)
{
  int connfd = *((int *)vargp);
  pthread_detach(pthread_self());
  free(vargp);

  echo(connfd);
  close(connfd);

  return NULL;
}