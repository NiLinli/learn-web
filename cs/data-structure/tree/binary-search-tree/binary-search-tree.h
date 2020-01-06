#ifndef _Tree_H_
#define _Tree_H_

typedef struct _treeNode {
  int Element;
  struct _treeNode *Left;
  struct _treeNode *Right;
} TreeNode;

typedef struct TreeNode SearchTree;
typedef struct TreeNode Position;

SearchTree* MakeEmpty(SearchTree *node);
Position* Find(int x, SearchTree *node);
Position* FindMin(SearchTree *node);
Position* FindMax(SearchTree *node);
SearchTree* Insert(int x, SearchTree *node);
SearchTree* Delete(int x, SearchTree *node);
int Retrieve(Position *p);


#endif