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