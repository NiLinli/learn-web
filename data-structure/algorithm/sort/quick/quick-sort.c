#include <stdio.h>

// C 语言只能改变原有数组

// 找出 base 应该放置的位置
// 将小于 base 的放在左边, 大于 base 的放在右边
int partition(int arr[], int start, int end) {
  int base = arr[start];

  while (start < end) {
    while (start < end && arr[end] > base) {
      // 最后指向不符合条件的一个位置
      end--;
    }

    arr[start] = arr[end];

    while (start < end && arr[start] <= base) {
      start++;
    }

    arr[end] = arr[start];
  }

  arr[start] = base;
  // OR
  // arr[end] = base;

  return start;
}

void quick_sort(int arr[], int start, int end) {
  int base = arr[0];

  if (start < end) {
    int base_index = partition(arr, start, end);

    quick_sort(arr, start, base_index - 1);
    quick_sort(arr, base_index + 1, end);
  }
}

int main() {
  int arr[] = {1, 7, 8, 2, 3, 9, 1, 4, 3};

  int length = sizeof(arr) / sizeof(arr[0]);

  quick_sort(arr, 0, length);

  for (int i = 0; i < length; i++) {
    printf("%d ", arr[i]);
  }
  return 0;
}

// 平均情况 O(nlogn), 并且常量 C 比归并排序小
// 两边能够比较均匀的均分 logn
// 每一次分的时间为 n, 常量在变小快

// 最糟情况 O(n^2)
// 单边一直为空 调用栈为 n
// 每次切换的时候为 n, 常量变小慢

