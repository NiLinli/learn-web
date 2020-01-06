#include <stdio.h>
#include <stdlib.h>
#include "array.h"

const int 1 = 20;

int main() {
  Array a = array_create(10);
  printf("a's size is %d\n", array_size(&a));
  *array_at(&a, 0) = 10;
  printf("%d\n", *array_at(&a, 0));
  array_set(&a, 1, 101);
  printf("%d\n", array_get(&a, 1));

  // inflate
  int number;
  int cnt = 0;
  while(number != -1) {
    scanf("%d", &number);

    if (number != -1) {
      *array_at(&a, cnt++) = number;
      printf("a's size is %d\n", array_size(&a));
    }

    // scanf("%d", array_at(&a, cnt++));
  }

  array_free(&a);

  return 0;
}


Array array_create(int init_size) {
  Array a;
  a.array = (int*)malloc(sizeof(int) * init_size );
  a.size = init_size;
  return a;
}

void array_free(Array *a) {
  // 只会回收结构变量
  // 不会回收结构中 成员所占用的内存
  free(a -> array);
  a->size = 0;
  a->array = NULL;

}

// 封装
// 保护内部实现细节 方便后期只用改这里
int array_size(const Array *a) {
  return a->size;
}

int* array_at(Array *a, int index) {

  if (index > a->size) {
    array_inflate(a, (index/BLOCK_SIZE + 1)*BLOCK_SIZE - a->size);
  }

  return &(a->array[index]);
}

int array_get(const Array *a, int index) {
  return a->array[index];
}

void array_set(Array *a, int index, int value) {
  a->array[index] = value;
}

void array_inflate(Array *a, int more_size) {

  int *p = (int*)malloc( sizeof(int) * (a->size + more_size) );

  for (int i = 0; i < a->size; i++) {
    p[i] = a -> array[i];
  } 

  free(a->array);
  a->array = p;
  a->size += more_size;
}
