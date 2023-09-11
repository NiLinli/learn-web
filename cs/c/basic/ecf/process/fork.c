#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{

  printf("parent process only run\n");

  // 共享变量会被子进程拷贝
  int a = 12;
  pid_t pid = fork();

  // fork 之后的代码两个进程分别执行

  if (pid == 0)
  // children process
  {
    a++;
    // children: &a = 0x7ff7b8c3e308  地址相同, 但是是各自进程所对应的私有地址空间
    printf("children: &a = %p\n", &a);
    printf("children: a = %d\n", a);
  }
  else
  // parent process
  {
    a--;
    // parent:  &a = 0x7ff7b8c3e308
    printf("parent:  &a = %p\n", &a);
    printf("parent: a = %d\n", a);
  }

  // fork 之后的代码父子进程每一行都会执行
  printf("parent and child process both run\n");

  return 0;
}