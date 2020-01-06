#include <stdio.h>

// union : 所有成员使用同一个空间
// 空间的存储的实际数字 可以以 union 中每一个成员的类型去读取


typedef union {
  int i;
  char ch[sizeof (int)];
} CHI;

int main() {
  CHI chi;
  int i;
  chi.i =1234;

  // 得到一个 类型 每个字节内部的存储
  for(i = 0;i< sizeof(int);i++){
    printf("%02hhx",chi.ch[i]);
  }

  printf("\n");

}