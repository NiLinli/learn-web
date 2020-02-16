# Process

## node command

- `node` 执行 REPL
- `node [options] [v8-options] [-e string | script.js | -] [--] [arguments ...]`

## env

1. 可以读取系统环境变量
2. 可以修改环境变量(只在此进程中有用)

设置开发环境

`export NODE_ENV=development && node index.js`