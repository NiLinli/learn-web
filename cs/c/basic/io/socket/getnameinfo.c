#include <sys/socket.h>
#include <string.h>
#include <netdb.h>
#include <stdio.h>
#include <stdlib.h>
#include <arpa/inet.h>

// sockaddr -> ip
int main(int argc, char *argv[])
{
  struct sockaddr_in addr;
  char host[NI_MAXHOST], service[NI_MAXSERV];

  memset(&addr, 0, sizeof(addr));
  addr.sin_family = AF_INET;
  addr.sin_addr.s_addr = inet_addr(argv[1]);
  addr.sin_port = htons(443);

  int err = getnameinfo((struct sockaddr *)&addr, sizeof(addr),
                        host, NI_MAXHOST, service, NI_MAXSERV, 0);
  if (err != 0)
  {
    printf("getnameinfo error: %s\n", gai_strerror(err));
    exit(EXIT_FAILURE);
  }

  printf("Host: %s\n", host);
  // service 服务协议
  printf("Service: %s\n", service);

  return 0;
}