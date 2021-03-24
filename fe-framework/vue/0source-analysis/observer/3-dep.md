# dep

dep 是一个 observable/sub, 可观察对象

```js
// src/core/observer/dep.js
let uid = 0

export default class Dep {
  static target: ?Watcher;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  // 收集观察者 Watcher
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
      // Dep.target => Watchers
      // Watcher.addDep => dep.addSub(this)
    }
  }

  // 通知 Watcher 更新
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []

export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}

```
