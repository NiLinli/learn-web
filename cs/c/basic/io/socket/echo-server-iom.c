#include "network.h"

typedef struct
{
  int maxfd;
  fd_set read_set;
  fd_set ready_set;
  int nready;
  int maxi; // high water index into client array
  int clientfd[FD_SETSIZE];
} pool;

void init_pool(int listenfd, pool *p);
void add_client(int connfd, pool *p);
void check_clients(pool *p);

int byte_cnt = 0;

int main(int argc, char **argv)
{
  int listenfd, connfd;
  socklen_t clientlen;
  struct sockaddr_storage clientaddr; /* Enough space for any address */
  char client_hostname[MAXLINE], client_port[MAXLINE];

  static pool pool;

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

  init_pool(listenfd, &pool);

  while (1)
  {
    pool.ready_set = pool.read_set;
    pool.nready = select(pool.maxfd + 1, &pool.ready_set, NULL, NULL, NULL);

    if (FD_ISSET(listenfd, &(pool.ready_set)))
    {
      clientlen = sizeof(struct sockaddr_storage);
      connfd = accept(listenfd, (struct sockaddr *)&clientaddr, &clientlen);
      getnameinfo((struct sockaddr *)&clientaddr, clientlen, client_hostname, NI_MAXHOST,
                  client_port, NI_MAXSERV, 0);
      printf("Connected to (%s, %s)\n", client_hostname, client_port);
      add_client(connfd, &pool);
    }

    check_clients(&pool);
  }
}

// select listenfd
void init_pool(int listenfd, pool *p)
{
  p->maxi = -1;

  for (int i = 0; i < FD_SETSIZE; i++)
  {
    p->clientfd[i] = -1;
  }

  p->maxfd = listenfd;
  FD_ZERO(&(p->read_set));
  FD_SET(listenfd, &(p->read_set));
}

// select connfd
void add_client(int connfd, pool *p)
{
  p->nready--;

  int i;
  // 记录 connfd
  for (i = 0; i < FD_SETSIZE; i++)
  {
    if (p->clientfd[i] < 0)
    {
      p->clientfd[i] = connfd;

      FD_SET(connfd, &p->read_set);

      if (connfd > p->maxfd)
        p->maxfd = connfd;

      if (i > p->maxi)
        p->maxi = i;

      break;
    }
  }

  printf("connfd = %d, i = %d\n", connfd, i);

  if (i == FD_SETSIZE)
  {
    fprintf(stderr, "add_client_error: Too many clients");
    exit(1);
  }
}

// event echo
void check_clients(pool *p)
{

  int i, connfd;

  for (i = 0; (i <= p->maxi) && (p->nready > 0); i++)
  {
    connfd = p->clientfd[i];

    printf("%d , %d\n", connfd, FD_ISSET(connfd, &p->ready_set));

    if ((connfd > 0) && (FD_ISSET(connfd, &p->ready_set)))
    {
      p->nready--;
      int echo_rc = echo_slice(connfd);
      if (echo_rc == NULL)
      {
        // EOF
        close(connfd);
        // clear bit
        FD_CLR(connfd, &p->read_set);
        p->clientfd[i] = -1;
      }
    }
  }
}