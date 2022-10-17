#include <stdio.h>

int main() {
  char str[20];
  FILE *fp = fopen("origin.txt", "r");


  fgets(str, 20, fp);

  
  printf("str = %s\n", str);
  printf("haha \n");
  return 0;
}