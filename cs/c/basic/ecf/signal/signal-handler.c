#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
#include <errno.h>

void handler1(int sig)
{
  pid_t pid;

  // waitpid arg1 -1: 任意子进程/-1000: pid 为 1000 的子进程
  // 当前处理信号
  // 待处理信号, 只有一个
  // 1 1->2
  // 1 handler 处理过程中 第三个信号已经达到
  // 1 1->3
  if ((pid = waitpid(-1, NULL, 0)) < 0)
  {
    fprintf(stderr, "waitpid error\n");
    exit(0);
  }

  printf("Handler reaped child %d\n", (int)pid);

  // mock 一些释放资源操作, 可能阻塞其他信号
  sleep(2);
  return;
}

void handler2(int sig)
{
  pid_t pid;

  // 每次尽量清空当前 + 待处理信号
  while ((pid = waitpid(-1, NULL, 0)) > 0)
    printf("Handler reaped child %d\n", (int)pid);

  if (errno != ECHILD)
  {
    fprintf(stderr, "waitpid error\n");
    exit(0);
  }

  sleep(2);
  return;
}

int main()
{
  int i, n;
  char buff[8024];

  // 子进程结束会发送一个 SIGCHLD 信号
  // signal(SIGCHLD, handler1);
  signal(SIGCHLD, handler2);

  for (i = 0; i < 3; i++)
  {
    if (fork() == 0)
    // each child process
    {
      printf("Hello from child %d\n", (int)getpid());
      sleep(1);
      exit(0);
    }
  }

  // parent process
  // linux 慢速系统调用被中断后会自动恢复, 有的系统不会
  // if ((n = read(STDIN_FILENO, buff, sizeof(buff))) < 0)
  // {
  //   fprintf(stderr, "read error\n");
  //   exit(0);
  // };

  // 使用 while 不断重试恢复调用
  while ((n = read(STDIN_FILENO, buff, sizeof(buff))) < 0)
  {
    // 处理出 signal 中断以外的正常调用
    if (errno != EINTR)
    {
      fprintf(stderr, "read error\n");
      exit(0);
    }
  };

  printf("Parent processing input \n");

  while (1)
    ;

  exit(0);
}