#include "network.h"

int main(int argc, char **argv)
{
  int listenfd, connfd;
  socklen_t clientlen;
  struct sockaddr_storage clientaddr; /* Enough space for any address */
  char client_hostname[MAXLINE], client_port[MAXLINE];

  if (argc != 2)
  {
    fprintf(stderr, "usage: %s <port>\n", argv[0]);
    exit(0);
  }

  // listenfd 客户端建立链接请求 End point
  // 整个服务端声明周期, 创建一次
  listenfd = open_listenfd(argv[1]);

  if (listenfd < 0)
  {
    fprintf(stderr, "open_listenfd error\n");
    exit(0);
  }

  while (1)
  {
    clientlen = sizeof(struct sockaddr_storage);

    // 客户端和服务端链接点
    // 每个客户端请求都会创建一个
    // 为 concurrent servers 提供支持
    connfd = accept(listenfd, (struct sockaddr *)&clientaddr, &clientlen);

    if (connfd < 0)
    {
      fprintf(stderr, "Accept error\n");
      exit(0);
    }

    getnameinfo((struct sockaddr *)&clientaddr, clientlen, client_hostname, NI_MAXHOST,
                client_port, NI_MAXSERV, 0);
    printf("Connected to (%s, %s)\n", client_hostname, client_port);

    echo(connfd);
    close(connfd);
  }
  exit(0);
}
