#include <stdio.h>
#include <wchar.h>
#include <locale.h>

int main(int argc, char const *argv[])
{
  // character too large for enclosing character literal type
  // char a = '😊';

  // UTF-8 接收成一个 char []
  // F0 9F 98 8A \0
  char str[] = "😊";
  printf("str = %s\n", str);

  // UTF-32 wchar_t 接收
  setlocale(LC_ALL, "");
  wchar_t char2 = L'😊';
  wprintf(L"sizeof(wchar_t) = %zu\n", sizeof(wchar_t));
  wprintf(L"char2 = %lc\n", char2);

  return 0;
}