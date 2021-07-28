# revert 回滚

没有文件层面的操作

还原某一个指定提交至**前面一个提交**, 并产生一个新的提交记录这个提交, **逆向操作的一次提交**, 是一次 commit

"revert" 不是 "undo"

- undo the data
- it doesn't undo history

## 意义

在不想重写 reset 历史的基础上  
回滚操作去需要记录到一个 commit

## 写法

```bash
git revert HEAD~2..HEAD    # 最后两个
git revert 0060370..73cb0d1 # 0060370 到 73cb0d1 区间

# 手动提交
git revert --no-commit 0766c053..HEAD
git commit

# mainline merge 的代码必须要指定主线, 因为前面一个提交有两条线, 所以必须指定一条
git revert -m 1 0766c053
```

## 常见问题

- [revert-a-faulty-merge](https://github.com/git/git/blob/master/Documentation/howto/revert-a-faulty-merge.txt)
revert merge 过来的代码, 在次 merge 时候, 会丢失代码, 因为 revert 产生的提交(逆向) 比需要合并的分支要新

1. git revert 使代码复原
2. 需要合并的分支正常后, git revert 上次的 revert, revert of revert 抵消掉 revert 的对代码的影响

code
code
code
code
