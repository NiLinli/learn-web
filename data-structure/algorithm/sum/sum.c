#include <stdio.h>

// 基线条件: 一般是数据为空/只有一个元素

int sum(int arr[], int length) {
  // 使用 length 记录列表的长度
  if (length == 1) {
    // 基线条件
    return arr[length - 1];
  } else {
    return arr[length - 1] + sum(arr, length - 1);
  }
}

int main() {
  int arr[] = {2, 5, 6, 7};
  printf("sum(arr) = %d\n", sum(arr, sizeof(arr) / sizeof(arr[0])));
  return 0;
}