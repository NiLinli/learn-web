// 定义 tree 的节点
typedef struct _treeNode {
  int value;
  struct _treeNode *left;
  struct _treeNode *right;
} TreeNode;

// 定义 tree
typedef struct {
  TreeNode *root;
} BinaryTree;

BinaryTree *init_tree(TreeNode *root);
TreeNode *create_tree_node(int value, TreeNode *left, TreeNode *right);
void travel_middle_recrutive(TreeNode *root);
void travel_pre_recrutive(TreeNode *root);
void travel_end_recrutive(TreeNode *root);
