#ifndef _ARRAY_H
#define _ARRAY_H

// 自定义数组结构
typedef struct {
  int *array;     // 分配一段空间
  int size;
} Array;

Array array_create(int init_size);                // 创建线性表
void array_free(Array *a);                        // 清空线性表
int array_size(const Array *a);                   // 返回线性表的大小
int* array_at(Array *a, int i);                   // 访问线性表单元
int array_get(const Array *a, int i);             // 取得线性表单元
void array_set(Array *a, int i, int value);       // 设置线性表单元
void array_inflate(Array *a, int more_size);      // 扩充线性表
int array_find(Array *a, int value);              // 查找
void array_add(Array *a, int value);              // append
void array_insert(Array *a, int i, int value);    // 插入 当前位置新增, 其他都往后面移 1 位
void array_delete(Array *a, int i);               // 删除 当前位置删除, 其他都往前面移 1 位
void array_print(Array *a);                       // print

#endif


// 缺点
// 1. 每次都需要完全拷贝(效率低)
// 2. 不断申请空间的时候, 前面的空间 free , 往后 malloc 空间, 会出现空间够, 但是无法申请的场合
//    - 前面 n - BS (不满足)
//    - 当前 n (假设 n >> BS)
//    - 后面 3BS (不满足)
// 需要 n + BS , 前面 + 后面 满足条件(证明空间够用, 但是无法申请)
