#include <stdio.h>

int f(void);

int main(int argc, char const *argv[])
{
    printf("result is %d\n", f());
    return 0;
}

int f(void)
{
    // 必须要定义列数
    // 列是单个数组的大小, 可以寻址
    int a[][5] = {
        {1, 2, 3, 4, 5},
        {6, 7, 8, 9, 0}};

    const int size = 3;
    int board[size][size];

    int i, j;

    int numOfX;
    int numOfO;
    int result = -1; // -1 没有人赢 1 X 0 O

    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            scanf("%d", &board[i][j]);
        }
    }

    // 检查行

    for (i = 0; i < size && result == -1; i++)
    {
        numOfO = numOfX = 0;

        for (j = 0; i < size; j++)
        {
            if (board[i][j] == 1)
            {
                numOfX++;
            }
            else
            {
                numOfO++;
            }
        }

        if (numOfO == size)
        {
            result = 0;
        }
        else if (numOfX == size)
        {
            result = 1;
        }
    }

    // 检查列
    if (result != -1)
    {
        return result;
    }

    for (j = 0; j < size && result == -1; j++)
    {
        numOfO = numOfX = 0;

        for (i = 0; i < size; i++)
        {
            if (board[i][j] == 1)
            {
                numOfX++;
            }
            else
            {
                numOfO++;
            }
        }

        if (numOfO == size)
        {
            result = 0;
        }
        else if (numOfX == size)
        {
            result = 1;
        }
    }

    // 检查对角线
    if (result != -1)
    {
        return result;
    }
    numOfO = numOfX = 0;

    for (i = 0; i < size; i++)
    {
        if (board[i][i] == 1)
        {
            numOfX++;
        }
        else
        {
            numOfO++;
        }
    }

    if (result != -1)
    {
        return result;
    }

    numOfO = numOfX = 0;

    for (i = 0; i < size; i++)
    {
        if (board[i][size - i - 1] == 1)
        {
            numOfX++;
        }
        else
        {
            numOfO++;
        }
    }

    return result;
}
