#include "binary-tree.h"

#include <math.h>
#include <stdio.h>
#include <stdlib.h>

// 初始化一棵树
BinaryTree *init_tree(TreeNode *root) {
  BinaryTree *tree = (BinaryTree *)malloc(sizeof(BinaryTree));
  tree->root = root;

  return tree;
}

// 创建一个 TreeNode 节点
TreeNode *create_tree_node(int value, TreeNode *left, TreeNode *right) {
  TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));
  node->value = value;
  node->left = left;
  node->right = right;

  return node;
}

void travel_middle_recrutive(TreeNode *root) {
  if (root == NULL) {
    return;
  }

  travel_middle_recrutive(root->left);
  printf("%d\n", root->value);
  travel_middle_recrutive(root->right);
}

void travel_pre_recrutive(TreeNode *root) {
  if (root == NULL) {
    return;
  }

  printf("%d\n", root->value);
  travel_pre_recrutive(root->left);
  travel_pre_recrutive(root->right);
}

void travel_end_recrutive(TreeNode *root) {
  if (root == NULL) {
    return;
  }

  travel_end_recrutive(root->left);
  travel_end_recrutive(root->right);
  printf("%d\n", root->value);
}

