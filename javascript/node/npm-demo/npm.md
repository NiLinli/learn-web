# npm

1. `npm init -y` 新建一个工程
2. 修改 `package.json`

## folders tree 结构

## 包的 CRUD

1. global(全局)
    - `/usr/local`
    - `%AppData%\npm`
2. local(本地)
    - `./node_modules`

### C

语义化：

- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4 (npm i xxx -S 默认)
- Major releases: * or x

`npm i`:
package -> 是否满足 package.json 里面的标准

1. 满足 -> 不下载, 也不更新到 wanted, 如果需要更新到 wanted , 使用更新操作
2. 不满足 -> 下载

修改

1. `package.json`
2. `package-lock.json` 记录的是实际下载的 folder tree

### R

### U

1. `npm outdated` 查看那些包需要更新
2. `npm update` 更新到 wanted (package.json 会更新)

### D



## bin (Executables)