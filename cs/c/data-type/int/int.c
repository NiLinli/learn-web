#include <stdio.h>
#include <stdint.h>

// gcc -m32 int.c
// gcc -m64 int.c
int main(int argc, char const *argv[])
{
  printf("char size = %lu\n", sizeof(char));
  printf("short size = %lu\n", sizeof(short));
  printf("int size = %lu\n", sizeof(int));
  printf("long size = %lu\n", sizeof(long));
  printf("long long size = %lu\n", sizeof(long long));

  printf("int8_t size = %lu\n", sizeof(int8_t));
  printf("int16_t size = %lu\n", sizeof(int16_t));
  printf("int32_t size = %lu\n", sizeof(int32_t));
  printf("int64_t size = %lu\n", sizeof(int64_t));
  printf("uint64_t size = %lu\n", sizeof(uint64_t));
}

// nilinlideMacBook-Pro:int nilinli$ gcc -m32 int.c
// ld: warning: The i386 architecture is deprecated for macOS (remove from the Xcode build setting: ARCHS)
// nilinlideMacBook-Pro:int nilinli$ ./a.out 
// char size = 1
// short size = 2
// int size = 4
// long size = 4        <------
// long long size = 8
// int8_t size = 1
// int16_t size = 2
// int32_t size = 4
// int64_t size = 8
// uint64_t size = 8