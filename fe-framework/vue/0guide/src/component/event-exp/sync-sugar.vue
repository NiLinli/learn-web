<template>
  <div>
    <p>{{ title }}</p>
    ---- child emit -----
    <child-emit type="sync" :title.sync="title" />
    <child-emit type="sync" :title="title" @update:title="(e) => (title = e)" />
  </div>
</template>

<script>
// if (modifiers.sync) {
      //  生成 Code 
      //  syncGen = genAssignmentCode(value, `$event`)
      //  if (!isDynamic) {
        //  addHandler(
          //  el,
          //  绑定 update: 开头的 event
          //  `update:${camelize(name)}`,
          //  syncGen,
          //  null,
          //  false,
          //  warn,
          //  list[i]
        //  )

// 生成形如 title = e 的 Code
// export function genAssignmentCode (
//   value: string,
//   assignment: string
// ): string {
//   const res = parseModel(value)
//   if (res.key === null) {
//     return `${value}=${assignment}`
//   } else {
//     return `$set(${res.exp}, ${res.key}, ${assignment})`
//   }
// }

import ChildEmit from './child-emit';
export default {
  components: {
    ChildEmit,
  },
  data() {
    return {
      title: '123',
    };
  },
};
</script>

<style></style>
