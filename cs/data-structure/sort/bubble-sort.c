#include <stdio.h>


int main () {
  int arr[] = { 1, 7, 8, 2, 9, 4, 3 };
  int length = sizeof(arr) / sizeof(arr[0]);

  // 每次从 0 开始找出最大或者最小的放到右端
  // 固定右端
  // N - 1 次遍历
  // N - 2        右边固定 0 个
  // ....
  // 0            右边固定 N - 1 个


  // 最后一个不用比较 length - 1 
  for (int i = 0; i < length - 1; i++) {
    // 已经固定到右端的不用比较 length - i - 1
    for (int j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) {
    printf("%d ", arr[i]);
  }

  printf("\n");

  
}

// O(N^2)

