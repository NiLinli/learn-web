#include <stdio.h>
#include <string.h>
#include <netdb.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
  struct addrinfo *p, *listp, hints;
  char host[NI_MAXHOST];
  int rc, flags;

  if (argc != 2)
  {
    fprintf(stderr, "usage: %s <domain name>\n", argv[0]);
  }

  char *hostname = argv[1];

  memset(&hints, 0, sizeof(struct addrinfo));
  hints.ai_family = AF_INET; // IPv4 only
  hints.ai_socktype = SOCK_STREAM;

  // dns -> ip -> addr
  if ((rc = getaddrinfo(hostname, NULL, &hints, &listp)) != 0)
  {
    fprintf(stderr, "getaddrinfo error: %s\n", gai_strerror(rc));
    exit(1);
  }

  flags = NI_NUMERICHOST; // 显示 ip
  for (p = listp; p; p = p->ai_next)
  {
    int err = getnameinfo(p->ai_addr, p->ai_addrlen,
                          host, NI_MAXHOST, NULL, 0, fa);
    if (err != 0)
    {
      printf("getnameinfo error: %s\n", gai_strerror(err));
      exit(0);
    }

    printf("%s\n", host);
  }

  freeaddrinfo(listp);

  exit(0);
}