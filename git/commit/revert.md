# revert 回滚

- 工作区/暂存区干净
- 生成一个**新的**提交(反向操作), 不会改变历史 

## reset/revert

1. reset 只能重置到某个位置, 其他的代码都会丢失
2. revert 可以选择某个 commit 进行反向提交, 其他提交不会丢失
3. 多人开发 revert 回滚代码更加适合

## 场景

### 单分支

dev 分支开发, 发现历史提交有个 bug

```bash
git revert commitId       # 某次提交
git revert HEAD~2..HEAD    # 最后两个
git revert 0060370..73cb0d1 # 0060370 到 73cb0d1 区间

# 还原还原提交
git revert revertCommitId

# 代码修改
git commit
```

### 多分支

```bash
git revert -m 1 mergeCommitId

# 还原还原提交(重要)
git revert mergeCommitId

# 修改完成后再次合并代码
git merge dev-opt
```

还原后不能直接合并, 因为还原生成一个新的提交(删除提交), 这个提交已经在 dev-opt 的前面, 直接合并导致 dev-opt 的代码不存在
