#include <stdio.h>
int f1(void);
extern int a1;

int main(int argc, char const *argv[])
{
    printf("main a1 = %d\n", a1); 
    // printf("main a2 = %d\n", a2); // error

    f1();
    return 0;
}

int a1 = 2;
int a2 = 3;

int f1(void)
{
    printf("f1 a1 = %d\n", a1);
    printf("f1 a2 = %d\n", a2);

    return 1;
}
