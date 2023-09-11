#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

// 执行一条 shell command
// exec* 各类函数主要是参数组成形式不同
void execl_command()
{
  if (fork() == 0)
  {
    execl("/bin/ls", "ls", "-F", (char *)NULL);
    exit(1);
  }

  wait(NULL);
  printf("command completed! \n");
}

extern char **environ;
void execve_command()
{
  char *myargv[16];

  myargv[0] = "/bin/ls";
  myargv[1] = "-F";
  myargv[2] = NULL;

  if (fork() == 0)
  {
    execve(myargv[0], myargv, environ);
    exit(1);
  }

  wait(NULL);
  printf("command completed! \n");
}

int main()
{
  execl_command();
  execve_command();
}
