#include <stdio.h>

void f(int a[]);
void f2(int *a);

int main(int argc, char const *argv[]) {

    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};

    // 数组的访问方式
    printf("a[2] = %d\n", a[2]);
    printf("*(a + 2) = %d\n", *(a + 2));    // 指针的访问方式

    // 数组与指针
    // a == &a == &a[0] 
    printf("&a = %p\n", &a);          // &a = 0x7ffee8cd3b50
    printf("a = %p\n", a);            // a = 0x7ffee8cd3b50
    printf("&a[0] = %p\n", &a[0]);    // &a[0] = 0x7ffee8cd3b50
    printf("&a[1] = %p\n\n", &a[1]);    // &a[1] = 0x7ffee8cd3b54

    // 内存大小
    printf("main sizeof(a) is %lu\n", sizeof(a)); // 40 个字节 数组总大小

    // 数组在函数参数中
    f(a);
    f2(a);
    printf("a[3] = %d\n", a[3]);   // a[3] = 300
    printf("a[4] = %d\n", a[4]);   // a[4] = 400
    
    return 0;
}

// 函数参数中的数组 为 point
// 只能添加长度参数 length
void f(int a[]) {
  printf("f sizeof(a) is %lu\n", sizeof(a));  // 8 个字节
  a[3] = 300;
}

// a[] 等效于 *a
void f2(int *a) {
  printf("f sizeof(a) is %lu\n", sizeof(a));  // 8 个字节
  a[4] = 400;
}
