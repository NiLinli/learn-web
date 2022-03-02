# successful branch

## 长期分支

- master
- develop

特点

1. master 合并 develop 时候必须是线性的
2. 合并完成后两者指向一致
3. master 采用 `--no-ff` 去合并 develop

## 短期分支

master 相关

1. hotfix

develop 相关

1. feature (Feature branches (or sometimes called topic branches) are used to develop new features for the upcoming or a distant future release. )
    - from develop
    - back to develop
2. release - release-* - (Release branches support preparation of a new production release. )
    - from develop
    - back to develop and master

回到 develop 的时机

1. develop (almost) reflects the desired state of the new release.

feature

``` 
新建
$ git checkout -b myfeature develop
 
开发开发....

被 merge
$ git checkout develop
$ git merge --no-ff myfeature
$ git branch -d myfeature
$ git push origin develop
```

release
 
```

```

实验 
master merge hotfix
develop merge hotfix 

develop 开发
master fast-forward develop 会产生一个新的 commit (recursive)  


develop merge release
master merge release

develop 开发

master fast-forward develop  Merge made by the 'recursive' strategy.