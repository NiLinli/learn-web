#include <stdio.h>

void f1(void) {
    printf("f1 function");
}

int main(int argc, char const *argv[]) {
    // 不支持 fp
    int f2 = f1;
    f2();       // error
    return 0;
}
