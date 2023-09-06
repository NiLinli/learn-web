#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main()
{
  char *c = (char *)calloc(100, sizeof(char));
  int fd = open("foo.txt", O_RDONLY, 0);

  // read will update postion 
  for (int i = 0; i < 5; i++)
  {
    read(fd, c, 2);
    printf("c = %s\n", c);
  }

  int fd2 = open("foo.txt", O_WRONLY, 0);

  // write will update postion
  for (int i = 0; i < 2; i++)
  {
    write(fd2, "hello geeks\n", strlen("hello geeks\n"));
  }

  // lseek 适合手动更改 position 的情况

  exit(0);
}