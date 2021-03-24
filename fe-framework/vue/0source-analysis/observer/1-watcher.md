# watch

## getter/setter

init 阶段

1. defineReactive 定义 getter/setter

## watcher

### render watcher

mount 阶段注册

1. 注册 Watcher
2. updateComponent render update
3. render 过程中调用 getter 依赖
    1. 每个属性对应一个 Dep
    2. Watcher 收集 dep
4. dep.notify 通知 Watcher 更新, updateComponent 回到第 2 步

```js
// 立即执行一次初始化渲染
// 监听数据更新
new Watcher(
  vm,
  updateComponent,  
  noop,
  {
    before() {
      // 初次执行时候, vm._isMounted 为 false, 所以不会执行 beforeUpdate 流程
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    },
  },
  true /* isRenderWatcher */
);
```

### computed watcher

### user watcher

```js
import {
  warn,
  remove,
  isObject,
  parsePath,
  _Set as Set,
  handleError,
  noop
} from '../util/index'

import { traverse } from './traverse'
import { queueWatcher } from './scheduler'
import Dep, { pushTarget, popTarget } from './dep'

import type { SimpleSet } from '../util/index'

let uid = 0

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
export default class Watcher {
  vm: Component;
  expression: string;
  cb: Function;
  id: number;
  deep: boolean;
  user: boolean;
  lazy: boolean;
  sync: boolean;
  dirty: boolean;
  active: boolean;
  // Watcher 持有的 dep 数组
  deps: Array<Dep>;
  newDeps: Array<Dep>;
  depIds: SimpleSet;
  newDepIds: SimpleSet;
  before: ?Function;
  getter: Function;
  value: any;

  constructor (
    vm: Component,
    expOrFn: string | Function,   // updateComponent
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)
    // options
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user
      this.lazy = !!options.lazy
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.id = ++uid // uid for batching
    this.active = true
    this.dirty = this.lazy // for lazy watchers
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
      if (!this.getter) {
        this.getter = noop
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get()  // 调用 get, 获取 vnode
  }

  get () {

    // 实例化 Watcher 时候, 将当前 Watcher 置于 Dep.target
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      // 1. render watcher
      // this.getter 为 updateComponent, vm.update(vm._render)
      // vm._render 过程中会触发所有的 getters
      // 2. computed watcher
      // 计算属性值的时候, 访问对应的 getter
      // 3. user watcher 
      // this.getter 为取值 function, 访问 getter
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      
      // user watcher 使用 deep 属性
      if (this.deep) {
        traverse(value)
      }
      popTarget()

      // 收集完成, 清除当前(上一次) Watcher 收集的 Dep
      this.cleanupDeps()
    }
    return value
  }

  // Watcher 收集 Dep(在收集过程中确保一个 Watcher 不会被一个 Dep 添加多次, 所以记录 deps)
  // 同时将 Watcher 放入到 Dep 中(收集过程)
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  // 收集完成 Watcher 清除当前(上次)Dep + 交换新的 dep 给当前
  // 1. 清除 this.deps(当前，初次为 []) 中的 Watcher
  // 2. 将 newDep 交换为 deps
  // 使用 v-if 导致每次收集的 dep 不相同时候, 很有必须要清除旧的 dep
  cleanupDeps () {
    let i = this.deps.length
    while (i--) {
      const dep = this.deps[i]
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }

  // watcher 执行更新
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      // 普通状态更新
      queueWatcher(this)
    }
  }

  // 执行更新
  run () {
    if (this.active) {
      // get 为 updateComponent
      const value = this.get()
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value
        this.value = value
        if (this.user) {
          try {
            // 执行 watcher 的 callback
            this.cb.call(this.vm, value, oldValue)
          } catch (e) {
            handleError(e, this.vm, `callback for watcher "${this.expression}"`)
          }
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }

  /**
   * Depend on all deps collected by this watcher.
   */
  depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }

  /**
   * Remove self from all dependencies' subscriber list.
   */
  teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this)
      }
      let i = this.deps.length
      while (i--) {
        this.deps[i].removeSub(this)
      }
      this.active = false
    }
  }
}

```
