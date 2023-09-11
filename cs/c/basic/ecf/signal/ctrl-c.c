#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>

void handler(int sig)
{
  printf("Caught SIGINT\n");
  exit(0);
}

int main()
{
  // CTRL-C 发送 SIGINT
  signal(SIGINT, handler);
  pause();
  exit(0);
}