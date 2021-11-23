#include <math.h>
#include <stdio.h>
#include <stdlib.h>

#include "../binary-tree.h"

TreeNode *resumeTreeCore(int arr_tree[], int length, int m, int n);

int main() {
  // 以顺序结构存储将 tree 作为完全二叉树存储
  int arr_tree[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

  int length = sizeof(arr_tree) / sizeof(arr_tree[0]);

  BinaryTree *tree = init_tree(resumeTreeCore(arr_tree, length, 0, 0));

  travel_middle_recrutive(tree->root);
  printf("\n");
  travel_pre_recrutive(tree->root);
  printf("\n");
  travel_end_recrutive(tree->root);

  return 1;
}

// m level
// n level i
// 构建完全二叉树
// 构建 Node
TreeNode *resumeTreeCore(int arr_tree[], int length, int m, int n) {
  int index = pow(2, m) - 1 + n;

  if (index >= length) return NULL;

  int value = arr_tree[index];

  // printf("%d\n", value);

  TreeNode *left = resumeTreeCore(arr_tree, length, m + 1, 2 * n);
  TreeNode *right = resumeTreeCore(arr_tree, length, m + 1, 2 * n + 1);

  TreeNode *node = create_tree_node(value, left, right);

  return node;
}
