#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main() 
{
  printf("parent only run\n");
  // fork a process
  fork();

  // fork 之后的代码父子进程每一行都会执行
  printf("Hello parent or child process\n");

  return 0;
}