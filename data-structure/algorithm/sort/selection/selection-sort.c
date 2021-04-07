#include <stdio.h>

// O(n^2)
void select_sort(int arr[], int length) {
  for (int i = 0; i < length; i++) {
    int min = arr[i];  // 取第一个值
    int min_index = i;
    for (int j = i + 1; j < length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        min_index = j;
      }
    }

    // 交换 i 和 min_index 的位置
    int temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }

  for (int i = 0; i < length; i++) {
    printf("%d ", arr[i]);
  }

  printf("\n");
}

int main() {
  int arr[] = {3, 7, 8, 2, 9, 4, 3};

  select_sort(arr, 7);
}