#include <stdio.h>
#include <errno.h>
#include <fcntl.h>
#include <unistd.h>

int main()
{
  int fd;

  if ((fd = open("./b.out", O_RDONLY | O_CREAT)) == -1)
  {
    perror("Open Error");
    exit(0);
  }

  printf("fd = %d\n", fd);

  close(fd);

  printf("File Open OR Created ! \n");
}