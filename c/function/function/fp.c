#include <stdio.h>

void f1(void)
{
    printf("f1 function");
}

int f2;

int main(int argc, char const *argv[])
{
    f2 = f1;
    f2();       // error
    return 0;
}
