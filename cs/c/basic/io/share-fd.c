#include <stdio.h>
#include <errno.h>
#include <fcntl.h>
#include <unistd.h>

int main()
{
  int fd1;
  int s = getpid() & 0x1;
  char c1, c2;

  fd1 = open("./code-encode.c", O_RDONLY, 0);
  read(fd1, &c1, 1);
  if (fork())
  {
    /* Parent */
    // fd 会在每个进程 fd table 中包含
    sleep(s);
    read(fd1, &c2, 1);
    printf("Parent: c1 = %c, c2 = %c\n", c1, c2);
  }
  else
  {
    /* Child */
    sleep(1 - s);
    read(fd1, &c2, 1);
    printf("Child: c1 = %c, c2 = %c\n", c1, c2);
  }
}