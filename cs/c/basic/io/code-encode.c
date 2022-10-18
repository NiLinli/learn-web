#include <stdio.h>
#include <wchar.h>
#include <locale.h>

int main(int argc, char const *argv[])
{
  // character too large for enclosing character literal type
  // char a = '😊';

  // 编译器根据源文件的编码 将字符串 转码 写入到内存中
  // 内存中的编码 由语言决定
  // 不同的编译器处理方式不同 C 语言没有规定字符串写入内存中如何编码
  // 根据编译器 + 源代码编码相同

  // UTF-8
  // F0 9F 98 8A \0
  // char str[] = "😊";

  // printf("str = %s\n", str);
  // char str3[30];
  // scanf("%s", str3);
  // printf("str3 = %s\n", str3);

  // UTF-32
  setlocale(LC_ALL, "");
  wchar_t str2[] = L"😊";
  wprintf(L"sizeof(wchar_t) = %zu\n", sizeof(wchar_t));

  return 0;
}