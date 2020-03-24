# 压缩打包

linux 文件后缀对机器没有特定的意义, 只是对人的说明作用

常见压缩后缀名

- `*.Z` compress
- `*.gz` gzip
- `*.bz2` bzip2
- `*.tar` tar 打包, 并未压缩
- `*.tar.gz` tar 打包, gzip 压缩
  
压缩只能压缩单一文件
打包可以将多个文件/文件夹导报成单一文件

## 压缩

### compress

最早期的压缩, 已经被 gzip 代替

- `compress filename` 压缩
- `compress -d filename.Z` 解压
- `uncompress filename.Z` 解压

### gzip

- `gzip [-#] filename` 压缩
  - # 代表压缩比 1 最差 9 最好 默认为 6
- `gzip -d filename.gz` 解压 gzip 和 compress

`zcat` 查看 gzip 压缩文件内容 osx 不支持

### bzip

osx 不支持

- `bzip -z filename` 压缩
- `bzip -d filename.bz2` 解压
  
`bzcat` 查看 bzip 压缩文件内容

## 打包

### tar

`tar [-zxcvfpP] filename`

- `z` 开启 gzip 压缩打包
  
- `x` 解包
- `c` 打包

- `v` 打包过程输出
- `f` 指定打包后的目标文件名

tar -zxvf backend.tar.gz -C ./backend 解压到指定文件夹

## 备份

### cpio

