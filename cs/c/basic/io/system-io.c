#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int getchar_buffer()
{
  static char buf[BUFSIZ];
  // buffer position
  static char *bufp = buf;
  static int n = 0;

  if (n == 0)
  {
    n = read(0, buf, sizeof buf);
    bufp = buf;
  }

  return (--n >= 0) ? (unsigned char)*bufp++ : EOF;
}

int main()
{
  char c = getchar_buffer();
  write(1, &c, 1);
}