#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void fork_process()
{
  printf("parent only run\n");
  // fork a process
  fork();

  // fork 之后的代码父子进程每一行都会执行
  printf("Hello parent or child process\n");
}

void fork_var()
{
  // 共享变量
  int a = 12;
  pid_t pid = fork();

  if (pid == 0)
  {
    // children process
    printf("children: a = %d, &a = %p\n", a, &a);
  }
  else
  {
    // parent process
    printf("parent: a = %d, &a = %p\n", a, &a);
  }
}

int main()
{
  fork_var();

  return 0;
}