// 如果没有引用其他
// 不用定义 script
// 直接在 template 声明 functional
<template functional>
  <div>
    <h1 v-if="props.level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="props.level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="props.level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="props.level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="props.level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="props.level === 6">
      <slot></slot>
    </h6>
  </div>
</template>