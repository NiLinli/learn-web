#include "network.h"

int open_clientfd(char *hostname, char *port)
{
  struct addrinfo *p, *listp, hints;
  int clientfd;

  memset(&hints, 0, sizeof(struct addrinfo));
  hints.ai_socktype = SOCK_STREAM; /* Open a connection */
  hints.ai_flags = AI_NUMERICSERV; /* ... using a numeric port arg. */
  hints.ai_flags |= AI_ADDRCONFIG; /* Recommended for connections */

  // 客户端获取 addrinfo 是用于获取目标 ip 相关信息

  if (getaddrinfo(hostname, port, &hints, &listp) != 0)
  {
    fprintf(stderr, "getaddrinfo error\n");
    exit(1);
  }

  for (p = listp; p; p = p->ai_next)
  {
    // 创建 socket fd, 建立与目标服务器相同的 socket
    if ((clientfd = socket(p->ai_family, p->ai_socktype, p->ai_protocol)) < 0)
      continue;

    // connect server
    if (connect(clientfd, p->ai_addr, p->ai_addrlen) != -1)
      break;
    else
      close(clientfd);
  }

  freeaddrinfo(listp);

  if (!p)
    return -1;
  else
    return clientfd;
}

int open_listenfd(char *port)
{
  struct addrinfo *p, *listp, hints;
  int listenfd, optval = 1;

  memset(&hints, 0, sizeof(struct addrinfo));

  hints.ai_socktype = SOCK_STREAM;             /* Accept connections */
  hints.ai_flags = AI_PASSIVE | AI_ADDRCONFIG; /* ... on any IP address */
  hints.ai_flags |= AI_NUMERICSERV;            /* ... using port number */

  // 本机
  if ((getaddrinfo(NULL, port, &hints, &listp)) != 0)
  {
    fprintf(stderr, "getaddrinfo error\n");
    exit(1);
  }

  for (p = listp; p; p = p->ai_next)
  {

    if ((listenfd = socket(p->ai_family, p->ai_socktype, p->ai_protocol)) < 0)
      continue;

    if (setsockopt(listenfd, SOL_SOCKET, SO_REUSEADDR, (const void *)&optval, sizeof(int)) < 0)
    {
      fprintf(stderr, "Setsockopt error:\n");
      exit(1);
    }

    // bind server socket address and socket listenfd
    int errno;
    if ((errno = bind(listenfd, p->ai_addr, p->ai_addrlen)) == 0)
    {
      break;
    }
    else
    {
      fprintf(stderr, "%s\n", strerror(errno));
      close(listenfd);
    }
  }

  freeaddrinfo(listp);

  if (!p)
    return -1;

  /* Make it a listening socket ready to accept connection requests */
  if (listen(listenfd, LISTENQ) < 0)
  {
    close(listenfd);
    return -1;
  }

  return listenfd;
}

int echo(int connfd)
{
  int n;
  char buf[MAXLINE];

  // read 会等待 connfd 可读
  // 所以除了 EOF 以外, 其他时候都为 > 0
  while ((n = read(connfd, buf, MAXLINE)) > 0)
  {
    printf("(%d)server received %d bytes, content is %s\n", connfd, (int)n, buf);
    sleep(5);
    write(connfd, buf, n);
  }

  return n;
}

int echo_slice(int connfd)
{
  int n;
  char buf[MAXLINE];

  // 可读时候调用一次 read
  if ((n = read(connfd, buf, 2)) > 0)
  {
    printf("(%d)server received %d bytes, content is %s\n", connfd, (int)n, buf);
    // block io 都需要放入 select 中管理
    sleep(5);
    write(connfd, buf, n);
  }

  return n;
}
