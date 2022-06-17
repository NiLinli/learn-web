# Vue

## class Vue

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// function class
// 动态扩展 prototype, 并未使用静态 class
// 内部扩展
// 外部通过 global api 扩展
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

## Vue.use

```js
Vue.use = function (plugin: Function | Object) {
  const installedPlugins = this._installedPlugins || (this._installedPlugins = []);

  // 已经添加过, 不会再去添加
  if (installedPlugins.indexOf(plugin) > -1) {
    return this;
  }

  // additional parameters
  const args = toArray(arguments, 1);
  args.unshift(this);

  // args -> [Vue, addParams1,  addParams2]
  // plugin 定义的时候, 可以传递参数

  if (typeof plugin.install === 'function') {
    // 调用 install 方法
    plugin.install.apply(plugin, args);
  } else if (typeof plugin === 'function') {
    // 调用 function(install) 函数
    plugin.apply(null, args);
  }
  installedPlugins.push(plugin);
  return this;
};
```

## Vue.mixin

```js
Vue.mixin = function (mixin: Object) {
  this.options = mergeOptions(this.options, mixin)
  return this
}
```


## class VueComponent