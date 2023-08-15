#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main() 
{
  
  // fork a process
  fork();
  fork();
  fork();

  // 2^n 2^3 = 8
  printf("Hello parent or child process\n");

  return 0;
}