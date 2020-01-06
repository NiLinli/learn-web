#ifndef _ARRAY_H
#define _ARRAY_H

// 自定义数组结构
typedef struct {
  int *array;     // 分配一段空间
  int size;
} Array;

// typedef struct {
//   int *array;
//   int size;
// }*  Array;        // Array 表示 struct xxx * 

// void f() {
//   Array a;    // 无法本地声明一个变量
// }

// 不要定义 point 类型 typedef

Array array_create(int init_size);                // 创建数组
void array_free(Array *a);                        // 清空数组
int array_size(const Array *a);                   // 返回数组的大小
int* array_at(Array *a, int index);               // 访问数组单元
int array_get(const Array *a, int index);         //
void array_set(Array *a, int index, int value);   //
void array_inflate(Array *a, int more_size);      // 扩充数组

#endif


// 缺点
// 1. 每次都需要完全拷贝(效率低)
// 2. 不断申请空间的时候, 前面的空间 free , 往后 malloc 空间, 会出现空间够, 但是无法申请的场合
//    - 前面 n - BS (不满足)
//    - 当前 n (假设 n >> BS)
//    - 后面 3BS (不满足)
// 需要 n + BS , 前面 + 后面 满足条件(证明空间够用, 但是无法申请)
