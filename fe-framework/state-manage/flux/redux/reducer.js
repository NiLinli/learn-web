const arr = [1, 2, 3, 4];

arr.reduce((prevState, currentState) => {
  return prevState + currentState;
}, 0);

// reducer 
// 1. reduce callback function: 描述每一次当前状态对之前状态的修改
// 2. 归并的思想: 将多个小的对 state 的更新多次合并到 state 中


