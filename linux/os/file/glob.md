# glob

glob patterns specify **sets of filenames** with wildcard characters.

wildcard characters: 通配符

- Unix 早期有一个/etc/glob文件保存通配符模板, Bash 引入
- 早于 regular exp, 功能简单

匹配当前目录下的文件, 不同实现对单层或者多层路径实现不同

## Wildcard characters

`?`: 代表单个字符

```bash
ls ?.md # 匹配只有一个字符的文件名
ls ??.md # 匹配只有两个字符的文件名
```

`*`: 0 个或多个字符
`**`: 常用来(不一定)匹配一个或者多个文件夹, ** 表示一个级别或者多个级别文件夹(ls 无效)


```bash
*.md # 匹配  xxx.md ... , 不能匹配 .md
s*.md # 匹配 s.md sxxxx.md , 起始非 * 的情况 * 可以匹配空白字符

test/**/a1 # 匹配 test/a/a1 test/a/b/c/d/a1
```

`[]` 任一字符, 可选范围

`[!]` `[^]` 不匹配范围内的字符, 可选范围

`{a,bef,cddd,d}` 匹配任一字符组(可以单一也, 可以多个)
