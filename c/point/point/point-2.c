#include <stdio.h>

// const 只读
// int * const p;   // p 为 const
// const int *p;    // *p 为 const

void constPoint();
void constValue();

int main(void){
  constPoint();
}


void constPoint() {
  int a = 1;
  int b = 2;
  int * const p = &a;  // p 是 const , 只读, p 不能被修改

  *p = 100; // ok
  // p = &b; // error
}


void constValue() {
  int a = 1;
  int b = 2;
  const int *p = &a;    
  // int const *p = &a;   相同

  a  = 22;  // ok
  *p = 22;   // error  // 不能通过 p 修改 a
  p = &b;     // ok
}


// 非 const 的值 转换为 const 的值
void toConst() {

}

