
#include <stdio.h>

// 分治 从小到大
// O(NlogN) 递归算法
// 1. 将 n 个元素数组 从中间切分
// 2. 递归分解
// 3. reduce 归并多个拆分的数组为一个数组

void merge_arr(int arr[], int start, int mid, int end, int arr2[]);

void merge_sort(int arr[], int start, int end, int temp[]) {
  // 基线条件
  if (start < end) {
    int mid = (start + end) / 2;
    merge_sort(arr, start, mid, temp);
    merge_sort(arr, mid + 1, end, temp);
    merge_arr(arr, start, mid, end, temp);
  }
}

// 合并连续的数组
// 由小块向大块合并, 小块一定是排好序的
// | --- | --- |
void merge_arr(int arr[], int start, int mid, int end, int arr2[]) {
  // int arr2[100];   // 每次开启一块空间, 不划算
  int i1 = start;
  int i2 = mid + 1;
  int k = 0;

  // 当两个数组都没有比较完
  while (i1 <= mid && i2 <= end) {
    arr2[k] = (arr[i1] > arr[i2]) ? arr[i1++] : arr[i2++];
    k++;
  }

  // 比较完了, 剩余的有顺序 直接追加到 arr2 后面
  while (i1 <= mid) {
    arr2[k] = arr[i1++];
    k++;
  }

  while (i2 <= end) {
    arr2[k] = arr[i2++];
    k++;
  }

  for (int i = 0; i < k; i++) {
    arr[start + i] = arr2[i];
  }
}

int main() {
  int arr[] = {1, 7, 8, 2, 3, 9, 1, 4, 3};

  int length = sizeof(arr) / sizeof(arr[0]);
  int temp[length];

  merge_sort(arr, 0, length - 1, temp);
  for (int i = 0; i < length; i++) {
    printf("%d ", arr[i]);
  }
}
