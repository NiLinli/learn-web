# use

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
