# .sync 修饰符

```js
// /src/compiler/parser/index.js
if (modifiers.sync) {
  syncGen = genAssignmentCode(value, `$event`);
  if (!isDynamic) {
    //  绑定 update: 开头的 event
    addHandler(el, `update:${camelize(name)}`, syncGen, null, false, warn, list[i]);
    if (hyphenate(name) !== camelize(name)) {
      addHandler(el, `update:${hyphenate(name)}`, syncGen, null, false, warn, list[i]);
    }
  } else {
    // handler w/ dynamic event name
    addHandler(
      el,
      `"update:"+(${name})`,
      syncGen,
      null,
      false,
      warn,
      list[i],
      true // dynamic
    );
  }
}
```

```js
// 生成形如 title = $event 的 Code
export function genAssignmentCode(value: string, assignment: string): string {
  const res = parseModel(value);
  if (res.key === null) {
    return `${value}=${assignment}`;
  } else {
    return `$set(${res.exp}, ${res.key}, ${assignment})`;
  }
}
```
