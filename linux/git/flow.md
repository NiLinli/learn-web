# workflow

## git flow

[git flow](https://nvie.com/posts/a-successful-git-branching-model/)

长期分支

- master
- develop

支持分支

- release
- feature
- hotfix

特点

- feature 来源于 develop, 而不是 master
- 支持分支设计比较麻烦, 不适合持续交付, 保持多个 release 分支可以适用于多版本开发

## cd workflow

- master is always production-like and deployable.
- rebase during feature development, explicit (non fast-forward) merge when done.

### github flow

[github flow](https://gist.github.com/jbenet/ee6c9ac48068889b0912)

- master
- feature

### gitlab flow

[gitlab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)

git flow & github flow 结合

- master
- feature
- production or release
- environment

## Fork

## PR



