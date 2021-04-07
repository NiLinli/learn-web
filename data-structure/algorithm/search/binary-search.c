#include <math.h>
#include <stdio.h>

// ascend
// logN
int binary_search(int list[], int list_length, int item) {
  int start = 0;
  int end = list_length - 1;

  while (start <= end) {
    int mid = ceil((end + start) / 2);

    int value = list[mid];

    if (item < value) {
      end = mid - 1;
    } else if (item > value) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

int main() {
  int arr[] = {1, 2, 3, 4, 5, 6, 7, 9, 10};
  int arr2[] = {1, 2, 3, 4, 5, 6, 7, 9, 10, 90};

  printf("%d\n", binary_search(arr, 9, 7));
  printf("%d\n", binary_search(arr, 9, 8));
  printf("%d\n", binary_search(arr, 10, 7));
  printf("%d\n", binary_search(arr, 10, 8));
}