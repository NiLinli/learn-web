#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>

void handler(int sig)
{
  static int beeps = 0;
  printf("BEEP\n");

  if (beeps < 5)
  {
    beeps++;
    alarm(1);
  }
  else
  {
    printf("BOOM!!!\n");
    exit(0);
  }
}

int main()
{
  // 异步调用 中断 main 中的 infinite loop
  // 不指定会有默认行为
  signal(SIGALRM, handler);

  alarm(1); // 1s 后发送 SIGALRM 给当前调用 process

  while (1)
    ;
}