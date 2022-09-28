#ifndef __MAIN_H__
#define __MAIN_H__   // 定义空的 macro , 用于预编译判断是否定义

#define MAXLINE 1000

struct Node {
    int a;
    int b;
};

// 表明变量已经定义, 提升作用域
// 本文件作用范围外定义 & 其他文件全局定义
extern int extern_a;

int f();

#endif