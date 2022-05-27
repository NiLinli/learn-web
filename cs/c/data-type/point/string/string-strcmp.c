#include <stdio.h>
#include <string.h>

// int strcmp(const char *s1, const char *s2)
// 0 s1 == s2
// 1 s1 > s2
// -1 s1 < s2

int main() {

  char line1_1[] = "hello";
  char line1_2[] = "hello";

  printf("strcmp(line1_1, line1_2) = %d\n", strcmp(line1_1, line1_2));

  char line2_1[] = "helloa";
  char line2_2[] = "helloA";
  printf("strcmp(line2_1, line2_2) = %d\n", strcmp(line2_1, line2_2));

}