#include "network.h"
#include "sbuf.h"

#define NTHREADS 2
#define SBUFSIZE 16

void *thread(void *vargp);

sbuf_t sbuf;

int main(int argc, char **argv)
{
  int listenfd, connfd;
  socklen_t clientlen;
  struct sockaddr_storage clientaddr;
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

  sbuf_init(&sbuf, SBUFSIZE);

  // 创建一个线程 pool
  for (int i = 0; i < NTHREADS; i++)
  {
    if (pthread_create(&tid, NULL, thread, NULL) != 0)
    {
      fprintf(stderr, "pthread_create error");
      exit(1);
    }
  }

  while (1)
  {
    clientlen = sizeof(struct sockaddr_storage);
    connfd = accept(listenfd, (struct sockaddr *)&clientaddr, &clientlen);
    if (connfd < 0)
    {
      fprintf(stderr, "Accept error\n");
      exit(0);
    }

    getnameinfo((struct sockaddr *)&clientaddr, clientlen, client_hostname, NI_MAXHOST,
                client_port, NI_MAXSERV, 0);
    printf("Connected to (%s, %s)\n", client_hostname, client_port);
    // 生产 消费
    sbuf_insert(&sbuf, connfd);
  }
  exit(0);
}

void *thread(void *vargp)
{
  pthread_detach(pthread_self());

  while (1)
  {
    int connfd = sbuf_remove(&sbuf);
    echo(connfd);
    close(connfd);
  }

  return NULL;
}