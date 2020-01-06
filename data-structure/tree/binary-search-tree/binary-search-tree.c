#include <stdio.h>
#include <stdlib.h>
#include "binary-search-node.h"


// typedef struct _treeNode {
//   int Element;
//   struct _treeNode *Left;
//   struct _treeNode *Right;
// } TreeNode;

// typedef struct TreeNode SearchTree;
// typedef struct TreeNode Position;

SearchTree* MakeEmpty(SearchTree *node) {
  if (node != NULL) {
    MakeEmpty(node -> Left);
    MakeEmpty(node -> Right);
    free(node);
  }
  return NULL;
}

Position* Find(int x, SearchTree *node) {
  if (node == NULL) {
    return NULL;
  } else if (x < node -> Element) {
    return Find(x, node -> Left);
  } else if (x > node -> Element) {
    return Find(x, node -> Right);
  } else {
    return node;
  }
}

// 递归实现
Position* FindMin(SearchTree *node) {

  if (node == NULL) {
    return NULL;
  } else if (node -> Left == NULL) {
    return node;
  } else {
    return FindMin(node -> Left);
  }

}

// 非递归实现
Position* FindMax(SearchTree *node) {
  if (node == NULL) {
    return NULL;
  } 
  
  while (node -> Right != NULL) {
    node =  node -> Right;
  }
  return node;
}

SearchTree* Insert(int x, SearchTree *node);
SearchTree* Delete(int x, SearchTree *node);
int Retrieve(Position *p);
