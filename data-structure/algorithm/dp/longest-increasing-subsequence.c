// 最长递增子序列(单个序列·)
// 子串: 必须连续
// 子序列: 不需要连续
#include <stdio.h>

void print_array(int *arr, int length);
void copy_array(int d[], int source[], int source_length);
void longest_is(int arr[], int arr_length);
int longest_is_advanced(int arr[], int arr_length);
int max(int a, int b);

int main() {
  int arr[] = {10, 8, 9, 2, 101, 7, 99, 1, 5};
  int length = sizeof(arr) / sizeof(arr[0]);
  longest_is(arr, length);
  printf("%d\n", longest_is_advanced(arr, length));
  return 0;
}

// O(n^2)
void longest_is(int arr[], int arr_length) {
  int longest_arr[arr_length];
  int size = 1;

  for (int i = 0; i < arr_length; i++) {
    int begin = arr[i];
    int result_arr[arr_length];
    int result_index = 0;
    result_arr[0] = begin;

    for (int j = i + 1; j < arr_length; j++) {
      int compare_value = arr[j];
      if (compare_value > begin) {
        result_arr[++result_index] = compare_value;
        begin = compare_value;
      }
    }

    if (result_index + 1 > size) {
      size = result_index + 1;
      copy_array(longest_arr, result_arr, size);
    }
  }

  printf("the longest increasing subsequence size is %d\n", size);
  print_array(longest_arr, size);
}

// O(n^2)
int longest_is_advanced(int arr[], int arr_length) {
  int dp_table[arr_length];

  // 初始化 dp_table 的值
  for (int i = 0; i < arr_length; i++) {
    dp_table[i] = 1;  // 最小的子序列也是包含自己的
  }

  // 自低向上算出 dp_table
  for (int i = 0; i < arr_length; i++) {
    for (int j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp_table[i] = max(dp_table[i], dp_table[j] + 1);
      }
    }
  }

  // 找出 dp_table 中的最大值

  int res = 0;
  for (int i = 0; i < arr_length; i++) {
    res = max(res, dp_table[i]);
  }

  print_array(dp_table, arr_length);

  return res;
}

void print_array(int *arr, int length) {
  printf("[");
  for (int i = 0; i < length; i++) {
    if (i == length - 1) {
      printf("%d]\n", arr[i]);
    } else {
      printf("%d, ", arr[i]);
    }
  }
}

void copy_array(int d[], int source[], int source_length) {
  for (int i = 0; i < source_length; i++) {
    d[i] = source[i];
  }
}

int max(int a, int b) { return a >= b ? a : b; }