#include "network.h"

void sigchld_handler(int sig)
{
  while (waitpid(-1, 0, WNOHANG) > 0)
    ;
  return;
}

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

  // Signal(SIGCHLD, sigchld_handler);
  listenfd = open_listenfd(argv[1]);

  if (listenfd < 0)
  {
    fprintf(stderr, "open_listenfd error\n");
    exit(0);
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

    // 父子进程都维护了一个 fd table, 需要释放
    if (fork() == 0)
    {
      // child process
      close(listenfd);
      echo(connfd);
      close(connfd);
      exit(0);
    }

    close(connfd);
  }
  exit(0);
}
