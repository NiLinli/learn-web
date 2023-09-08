#include "network.h"

int main(int argc, char **argv)
{
  int clientfd;
  char *host, *port, buf[8000];

  if (argc != 3)
  {
    fprintf(stderr, "usage: %s <host> <port>\n", argv[0]);
    exit(0);
  }
  host = argv[1];
  port = argv[2];

  clientfd = open_clientfd(host, port);

  while (gets(buf) != NULL)
  {
    write(clientfd, buf, strlen(buf));
    read(clientfd, buf, 8000);
    puts(buf);
  }
}
