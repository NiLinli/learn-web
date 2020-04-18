#include <stdio.h>
#include <stdlib.h>
#include "array.h"

int main() {
  Array a1 = array_create(20);
  Array *a = &a1;

  printf("a's size is %d\n", array_size(a));

  for(int i = 0;i < 9; i++) {
    array_set(a, i, i + 1);
  }

  array_print(a);

  array_delete(a, 2);
  array_print(a);

  array_insert(a, 2, 3);
  array_print(a);

  printf("%d\n", array_get(a, 1));

  return 0;
}

Array array_create(int init_size) {
  Array a;
  a.array = (int*)malloc(sizeof(int) * init_size);
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
    array_inflate(a, (index/sizeof(int) + 1)*sizeof(int) - a->size);
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

  int *p = (int*)malloc(sizeof(int) * (a->size + more_size));

  for (int i = 0; i < a->size; i++) {
    p[i] = a -> array[i];
  } 

  free(a->array);
  a->array = p;
  a->size += more_size;
}

int array_find(Array *a, int value) {
  for(int i = 0; i < a->size; i++) {
    if (array_get(a, i) == value) {
      return i;
    }
  }
  return -1;
}

void array_add(Array *a, int value) {
  a->array[a->size] = value;
}

void array_insert(Array *a, int i, int value) {

  if (i < 0 || i > a->size - 1) {
    printf("Insert 位置不合法\n");
    return;
  }

  for (int j = a->size - 1; j >= i; j--) {
    a->array[j + 1] = a->array[j]; 
  }

  a->array[i] = value;
  a->size++;
  
  return;
}

void array_delete(Array *a, int i) {
  if (i < 0 || i > a->size - 1) {
    printf("Delete 位置不合法\n");
    return;
  }

  // 将 i 之后的元素往前移动一个单位
  for(int j = i; j <= a->size - 2; j++) {
    a->array[j] = a->array[j + 1];
  }

  a->size--;
}

void array_print(Array *a) {
  printf("[");

  for(int i = 0; i<= a->size - 1; i++) {

    if (i == a->size -1) {
      printf("%d", a->array[i]);
    } else {
      printf("%d, ", a->array[i]);
    }
  }

  printf("]\n");
}