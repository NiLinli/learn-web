#include <sys/types.h>
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

// 父子进程并发执行
// 父进程等待子进程执行完毕
int main(int argc, char *argv[])
{
  printf("I am: %d\n", (int)getpid());

  pid_t pid = fork();

  // pid > 0 为执行父进程, 并且 pid 的值为子进程 pid
  // pid == 0 为执行子进程

  printf("fork returned: %d\n", (int)pid);

  if (pid < 0)
  { /* error occurred */
    perror("Fork failed");
  }
  
  if (pid == 0)
  { /* child process */
    printf("I am the child with pid %d\n", (int)getpid());
    printf("Child process is exiting\n");
    exit(0);
  }

  /* parent process */
  printf("I am the parent waiting for the child process to end\n");
  wait(NULL);
  printf("parent process is exiting\n");
  return (0);
}